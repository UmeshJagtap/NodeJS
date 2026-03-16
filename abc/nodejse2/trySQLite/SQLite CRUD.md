Great choice! SQLite is perfect for fast, zero‑config prototypes. Here’s a minimal, production‑friendly CRUD API using Node.js + Express + better-sqlite3 (fast, safe, and simple).

✅ What we’ll build

A small Express API for a todos table
Endpoints: Create, Read (list + by id), Update, Delete
Uses parameterized queries (prevents SQL injection)
Includes schema setup, error handling, pagination, and transactions

1. Project Setup

mkdir node-sqlite-crud
cd node-sqlite-crud
npm init -y
npm install express better-sqlite3
npm install -D nodemon

Add a dev script to package.json:

{
"name": "node-sqlite-crud",
"version": "1.0.0",
"type": "module",
"scripts": {
"dev": "nodemon server.js"
},
"dependencies": {
"better-sqlite3": "^9.0.0",
"express": "^4.19.2"
},
"devDependencies": {
"nodemon": "^3.0.0"
}
}

// Why better-sqlite3? It’s synchronous, super fast, and easy to use with prepared statements—ideal for small APIs.

2. Create the Database and Table
   Create db.js:

// db.js
import Database from 'better-sqlite3';

// The DB file will be created if it doesn't exist
const db = new Database('./data.sqlite', { verbose: null });

// Ensure tables exist (simple migration)
db.exec(`
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS todos (
id INTEGER PRIMARY KEY AUTOINCREMENT,
title TEXT NOT NULL,
completed INTEGER NOT NULL DEFAULT 0, -- 0=false, 1=true
created_at TEXT NOT NULL DEFAULT (datetime('now')),
updated_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_todos_completed ON todos (completed);
`);

export default db;

3. Build the Express App
   Create server.js:
   // server.js
   import express from 'express';
   import db from './db.js';

const app = express();
app.use(express.json());

// Helpers: map DB row to API shape
const mapTodo = (row) => ({
id: row.id,
title: row.title,
completed: !!row.completed,
created_at: row.created_at,
updated_at: row.updated_at,
});

// CREATE
app.post('/todos', (req, res) => {
try {
const { title, completed = false } = req.body || {};
if (!title || typeof title !== 'string') {
return res.status(400).json({ error: 'title (string) is required' });
}
const stmt = db.prepare(`      INSERT INTO todos (title, completed, created_at, updated_at)
      VALUES (?, ?, datetime('now'), datetime('now'))
   `);
const info = stmt.run(title.trim(), completed ? 1 : 0);

    const row = db.prepare(`SELECT * FROM todos WHERE id = ?`).get(info.lastInsertRowid);
    return res.status(201).json(mapTodo(row));

} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Internal error creating todo' });
}
});

// READ (list) with pagination & filters
app.get('/todos', (req, res) => {
try {
const { page = '1', pageSize = '10', completed } = req.query;
const p = Math.max(parseInt(page, 10) || 1, 1);
const ps = Math.min(Math.max(parseInt(pageSize, 10) || 10, 1), 100);
const offset = (p - 1) \* ps;

    let where = '';
    const params = [];
    if (completed !== undefined) {
      where = 'WHERE completed = ?';
      params.push(completed === 'true' ? 1 : 0);
    }

    const rows = db.prepare(
      `SELECT * FROM todos ${where} ORDER BY id DESC LIMIT ? OFFSET ?`
    ).all(...params, ps, offset);

    const total = db.prepare(
      `SELECT COUNT(*) as count FROM todos ${where}`
    ).get(...params).count;

    return res.json({
      page: p,
      pageSize: ps,
      total,
      items: rows.map(mapTodo),
    });

} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Internal error fetching todos' });
}
});

// READ (by id)
app.get('/todos/:id', (req, res) => {
try {
const id = Number(req.params.id);
if (!Number.isInteger(id) || id <= 0) {
return res.status(400).json({ error: 'Invalid id' });
}
const row = db.prepare(`SELECT * FROM todos WHERE id = ?`).get(id);
if (!row) return res.status(404).json({ error: 'Not found' });
return res.json(mapTodo(row));
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Internal error fetching todo' });
}
});

// UPDATE (partial)
app.patch('/todos/:id', (req, res) => {
try {
const id = Number(req.params.id);
if (!Number.isInteger(id) || id <= 0) {
return res.status(400).json({ error: 'Invalid id' });
}
const { title, completed } = req.body || {};
if (title !== undefined && typeof title !== 'string') {
return res.status(400).json({ error: 'title must be string' });
}
if (completed !== undefined && typeof completed !== 'boolean') {
return res.status(400).json({ error: 'completed must be boolean' });
}

    // Fetch existing
    const existing = db.prepare(`SELECT * FROM todos WHERE id = ?`).get(id);
    if (!existing) return res.status(404).json({ error: 'Not found' });

    const newTitle = title !== undefined ? title.trim() : existing.title;
    const newCompleted = completed !== undefined ? (completed ? 1 : 0) : existing.completed;

    const stmt = db.prepare(`
      UPDATE todos
      SET title = ?, completed = ?, updated_at = datetime('now')
      WHERE id = ?
    `);
    stmt.run(newTitle, newCompleted, id);

    const row = db.prepare(`SELECT * FROM todos WHERE id = ?`).get(id);
    return res.json(mapTodo(row));

} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Internal error updating todo' });
}
});

// REPLACE (full update)
app.put('/todos/:id', (req, res) => {
try {
const id = Number(req.params.id);
if (!Number.isInteger(id) || id <= 0) {
return res.status(400).json({ error: 'Invalid id' });
}
const { title, completed } = req.body || {};
if (typeof title !== 'string' || typeof completed !== 'boolean') {
return res.status(400).json({ error: 'title (string) and completed (boolean) are required' });
}

    const exists = db.prepare(`SELECT 1 FROM todos WHERE id = ?`).get(id);
    if (!exists) return res.status(404).json({ error: 'Not found' });

    db.prepare(`
      UPDATE todos
      SET title = ?, completed = ?, updated_at = datetime('now')
      WHERE id = ?
    `).run(title.trim(), completed ? 1 : 0, id);

    const row = db.prepare(`SELECT * FROM todos WHERE id = ?`).get(id);
    return res.json(mapTodo(row));

} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Internal error replacing todo' });
}
});

// DELETE
app.delete('/todos/:id', (req, res) => {
try {
const id = Number(req.params.id);
if (!Number.isInteger(id) || id <= 0) {
return res.status(400).json({ error: 'Invalid id' });
}
const info = db.prepare(`DELETE FROM todos WHERE id = ?`).run(id);
if (info.changes === 0) return res.status(404).json({ error: 'Not found' });
return res.status(204).send();
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'Internal error deleting todo' });
}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`SQLite CRUD API listening on http://localhost:${PORT}`);
});

// Run it:
npm run dev

4. Try It (cURL examples)

# Create

curl -s -X POST http://localhost:3000/todos \
 -H 'Content-Type: application/json' \
 -d '{"title":"First task"}' | jq

# List

curl -s http://localhost:3000/todos | jq

# Read by id

curl -s http://localhost:3000/todos/1 | jq

# Patch (partial)

curl -s -X PATCH http://localhost:3000/todos/1 \
 -H 'Content-Type: application/json' \
 -d '{"completed": true}' | jq

# Replace (full)

curl -s -X PUT http://localhost:3000/todos/1 \
 -H 'Content-Type: application/json' \
 -d '{"title":"Renamed","completed":false}' | jq

# Delete

curl -i -X DELETE http://localhost:3000/todos/1

5. Notes & Good Practices

Validation: Done at the API boundary (types, required fields).
Prepared statements: Every query is parameterized to prevent SQL injection.
Transactions: For multi-step operations, wrap with db.transaction(() => { ... }).

const tx = db.transaction((items) => {
const insert = db.prepare(`INSERT INTO todos (title, completed) VALUES (?, ?)`);
for (const it of items) insert.run(it.title, it.completed ? 1 : 0);
});
tx(itemsArray);

File location: data.sqlite is created in project root; add it to .gitignore.
Migrations: For more complex schemas, consider a lightweight migration tool (or keep db.exec blocks versioned).
Switching to async: If you prefer async/await, you can use the sqlite3 or better-sqlite3-multiple-ciphers variants, but for most prototypes, better-sqlite3 is simpler and faster.
