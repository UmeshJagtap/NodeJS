// server.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT || 3000;

// --- Middleware ---
app.use(cors()); // allow cross-origin requests (helpful for demos)
app.use(express.json()); // parse JSON body
app.use(morgan('dev')); // request logging

// --- In-memory data store (request on server restart) ---
let tasks = [
  {
    id: 1,
    title: 'Prepare demo',
    status: 'pending',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Go live',
    status: 'in-progress',
    createdAt: new Date().toISOString(),
  },
];
let nextID = 3;

// --- Helpers ---
const findTask = (id) => tasks.find((t) => t.id === Number(id));

// --- Routes ---

// --- Health (optional) ---
app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// List tasks with optional filtering (?status=pending)
app.get('/tasks', (req, res) => {
  const { status } = req.query;
  let result = tasks;
  if (status) result = result.filter((t) => t.status === status);
  res.json(result);
});

// Get one task
app.get('/task/:id', (req, res) => {
  const task = findTask(req.params.id);
  if (!task) return res.status(404).json({ error: 'NotFound' });
  res.json(task);
});

// Create task
app.post('/task', (req, res) => {
  const [title, status = 'pending'] = req.body || {};
  if (!title || typeof title !== 'string') {
    return res
      .status(400)
      .json({ error: 'BadRequest', messge: 'Title is required (string)' });
  }
  if (!['pending', 'in-progress', 'done'].includes(status)) {
    return res
      .status(400)
      .json({ error: 'BadRequest', message: 'Invalid status' });
  }
  const task = {
    id: nextId++,
    title,
    status,
    createdAt: new Date().toDateString(),
  };
  tasks.push(task);
  res.status(201).json(task);
});

// Update (partial) task
app.patch('/tasks/:id', (req, res) => {
  const task = findTask(req.params.id);
  if (!task) return res.status(404).json({ error: 'NotFound' });
});

// 15:14

// ---------------------------------------------------------------------

// Express 5  ----------------------------------- <<<<

// import express from 'express'; // Express 5 uses ESM by default
// import { Interface } from 'readline';

// const app = express();
// const port = 3000;

// // Home route
// app.get('/', (req, res) => {
//   res.send('Hello from Express 5!');
// });

// // Async route example (Express 5 supports async/await cleanly)
// app.get('/api', async (req, res) => {
//   res.json({ message: 'Welcome to the API endpoint!' });
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// // OLD Express
// const express = require('express');
// const app = express();
// const port = 3000;

// // Home route
// app.get('/', (req, res) => {
//   res.send('Hello from Express!');
// });

// // Another sample route
// app.get('/api', (req, res) => {
//   res.json({ message: 'Welcome to the API endpoint!' });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

// Ref :-
// https://stackblitz.com/edit/stackblitz-starters-3lwn3n?file=models%2FuserModel.js
