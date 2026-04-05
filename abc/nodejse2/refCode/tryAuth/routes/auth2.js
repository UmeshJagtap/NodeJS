// routes/auth.js
// const express = require('express');
import express from 'express';
const router = express.Router();

// Define the /login POST route
router.post('/login', (req, res) => {
  // Access the data sent in the POST request body
  const { username, password } = req.body;

  console.log('Received login data:', { username, password });

  res.set('Content-Type', 'text/plain'); // Set a single header
  // res.set({
  //   'Cache-Control': 'no-cache', // Set multiple headers using an object
  //   'X-Custom-Header': 'my-value',
  // });

  // Add your authentication logic here (e.g., check username and password against a database)
  if (username === 'testuser' && password === 'password123') {
    res.status(200).send('Login successful!');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// module.exports = router;
export default router;

// REF :-

// Postman
// POST >> http://localhost:3000/auth/login?username=testuser&password=password123
// Body >> raw >> JSON
// {
//   "username": "testuser",
//   "password": "password123"
// }

// POST >> http://localhost:3000/auth/login?username=testuser&password=password123
// Body >> x-www-form-urlencoded
// KEY >> username  VALUE >> testuser
// KEY >> password  VALUE >> password123
