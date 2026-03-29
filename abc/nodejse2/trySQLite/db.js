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
