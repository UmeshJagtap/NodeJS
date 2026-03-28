// import 'dotenv/config'
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
// Built-in Express middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    allowedHeaders: ['Authorization', 'Content-Type'],
  })
);

// const JWT_SECRET = 'your-jwt-secret-key';
const JWT_SECRET = 'your-jwt-secret-key';

app.set('view engine', 'ejs');

// Sample user database
const users = [
  { id: 1, username: 'user1', password: 'password1', role: 'user' },
  { id: 1, username: 'user2', password: 'password2', role: 'admin' },
];

app.get('/hello', (req, res) => {
  res.send('Hello World');
});

// *v* Login
app.get('/', (req, res) => {
  res.render('loginuser');
});
// Login route - generate token
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Find user
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Create payload for JWT
  const payload = {
    id: user.id,
    username: user.username,
    role: user.role,
  };

  // Sign token
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5m' });

  res.json({ message: 'Login successful', token });
});

// Middleware for JWT verification
const authenticateJWT = (req, res, next) => {
  // Get auth header - The Authorization header is commonly used to send authentication tokens
  const authHeader = req.headers.authorization;
  console.log('AuthHeader', authHeader);

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Protected route
app.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Profile accessed', user: req.user });
});

// Role-based route
app.get('/admin', authenticateJWT, (req, res) => {
  // Check if user has admin role
  if (req.user.role !== 'admin') {
    return res
      .status(403)
      .json({ message: 'Access denied: admin role required' });
  }

  res.json({ message: 'Admin panel accessed' });
});

// Start server
app.listen(8080, () => {
  console.log('Server running on port 8080');
});
