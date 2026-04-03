// import 'dotenv/config'
// const express = require('express');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

import express from 'express';
import jwt from 'jsonwebtoken';
import bodyparser from 'body-parser';
import cors from 'cors';
import cookieparser from 'cookie-parser';

const app = express();

app.use(cookieparser());
app.use(bodyparser.json());
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
  { id: 1, username: 'user1', password: 'i@mUser#1', role: 'user' },
  { id: 2, username: 'user2', password: 'iloveNode@User#2', role: 'admin' },
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

  // Set token in an HTTP-Only cookie for security
  res.cookie('token', token, {
    httpOnly: true, // The cookie cannot be accessed by client-side scripts
    secure: false, // Use 'true' in production with HTTPS
    maxAge: 5 * 60 * 1000, // 5 minutes, same as token expiry
  });

  // res.json({ message: 'Login successful' });
  // console.log('Generated JWT:', token);
  console.log('Login successful');
  res.redirect('/profile');
});

// Middleware for JWT verification
const authenticateJWT = (req, res, next) => {
  // Get token from the cookie
  const token = req.cookies.token;
  // console.log('Token from cookie:', token);

  if (!token) {
    return res
      .status(401)
      .json({ message: 'Access denied. No token provided.' });
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
  // res.json({ message: 'Profile accessed', user: req.user });
  res.render('profile', { message: 'Profile accessed', user: req.user });
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

// URLS
// http://localhost:8080  >> username: 'user2', password: 'iloveNode@User#2'
// http://localhost:8080/profile
// http://localhost:8080/admin

// REF : https://medium.com/@shivam.artoonsolution/nodejs-authentication-best-practices-and-tools-89daccd7dc42
