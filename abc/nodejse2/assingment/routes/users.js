//
// TODO : Add cookie parser !!! DONE
// TODO : Make a Role based access working !!!  ??
//

// const express = require("epress");
import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bcrypt from 'bcrypt';
import fs from 'fs';
// import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import path from 'path';

import bodyparser from 'body-parser';
import cookieparser from 'cookie-parser';

const JWT_SECRET = 'your-jwt-secret-key';
const router = express.Router();

router.use(cookieparser());
router.use(bodyparser.json());
router.use(express.urlencoded({ extended: true }));
router.use(
  cors({
    allowedHeaders: ['Authorization', 'Content-Type'],
  })
);

const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// console.log('UploadedFileName :- ', upload.getFilename);

// Middleware for JWT verification
const authenticateJWT = (req, res, next) => {
  // Get auth header - The Authorization header is commonly used to send authentication tokens
  // const authHeader = req.headers.authorization;
  // console.log('AuthHeader', authHeader);

  // if (!authHeader) {
  //   return res.status(401).json({ message: 'Authorization header missing' });
  // }

  // // Extract token from "Bearer <token>"
  // const token = authHeader.split(' ')[1];

  // Extract token from "cookie"
  const token = req.cookies.token;
  // console.log('token from cookie :-', token);
  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log('decoded : ', decoded);

    // Attach user to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Protected route
router.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Profile accessed', user: req.user });
});

// Role-based route
router.get('/admin', authenticateJWT, (req, res) => {
  // Check if user has admin role
  if (req.user.role !== 'SuperAdmin') {
    return res
      .status(403)
      .json({ message: 'Access denied: admin role required' });
  }

  res.json({ message: 'Admin panel accessed' });
});

// 1. GET /api/users --Retrieve all users
// router.get("/", authenticateToken, async (req, res) => {
router.get('/', async (req, res) => {
  try {
    res.render('user-list', { name: 'Umesh_Jagtap', users: users });
    // console.log('user_logging_in :- ' + JSON.stringify(user_logging_in));
    // isLoggedIn && res.render("user-list", { name: "Umesh_Jagtap", users: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

router.get('/create-user', (req, res) => {
  res.render('user-form');
});

// 2. GET /api/users/:id --Retrieve a specific user
router.get('/:id', (req, res) => {
  try {
    const user = users.find((u) => u.id === parseInt(req.params.id));
    res.render('user-card', { message: '', user: user });
    // isLoggedIn && res.render("user-list", { name: "Umesh_Jagtap", users: users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// 3. POST /api/users  --Create user

router.post('/create-user', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file received.');
  }
  const imagefilename = req.file.filename;
  console.log(`File uploaded successfully: ${imagefilename}`);

  // const { name, email, password, imageurl, birthdate, role } = req.body || {};
  const { name, email, password, birthdate, role } = req.body || {};
  console.log('Data received : ', name, email, password, birthdate, role);

  if (!name || typeof name !== 'string') {
    return res
      .status(400)
      .json({ error: 'BadRequest', message: 'Name is required (string)' });
  }
  if (!email || typeof email !== 'string') {
    return res
      .status(400)
      .json({ error: 'BadRequest', message: 'Email is required' });
  }
  if (!password || typeof password !== 'string') {
    return res
      .status(400)
      .json({ error: 'BadRequest', message: 'Password is required' });
  }

  const hashpwd = await bcrypt.hash(password, 10);
  const userIdToPush = users.at(-1).id + 1;
  console.log('userIdToPush : ', userIdToPush);
  const user = {
    id: userIdToPush,
    name,
    email,
    hashpwd,
    imageurl: '/' + imagefilename,
    birthdate,
    role,
  };
  console.log('USERDATA to be POSTED to USERS', user);

  async function createUser(user) {
    try {
      users.push(user);

      res.status(201);

      //   res.render('user-card', {
      //     message: 'User created Successfully .. ',
      //     user: user,
      //   });

      // res.status(201).json(user);
      console.log('User created Successfully .. ');

      // io.on('connection', (socket) => {
      //   socket.broadcast.emit('hello', 'world');
      // });

      res.redirect(301, '/api/users');
      console.log('redirecting to user-list page');
    } catch (error) {
      throw error;
    }
  }

  createUser(user);
});

// 4. PATCH /api/users/:id

router.get('/edit/:id', (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  res.render('user-edit-form', { user: user });
});

router.post('/edit/:id', async (req, res) => {
  function updateUser() {
    const id = parseInt(req.params.id);

    // const user = users.find((u) => u.id === parseInt(req.params.id));

    console.log('reqBody', req.body);

    let updatedUser = req.body;

    if (updatedUser.name != users[id].name) {
      users[id].name = updatedUser.name;
    }
    if (updatedUser.email != users[id].email) {
      users[id].email = updatedUser.email;
    }
    if (updatedUser.birthdate != users[id].birthdate) {
      users[id].birthdate = updatedUser.birthdate;
    }
    if (updatedUser.role != users[id].role) {
      users[id].role = updatedUser.role;
    }
  }

  // if(req.body.name != null) {
  //     res.user.name = req.body.name;
  // }
  // if (req.body.subscribedToChannel != null) {
  //     res.subscriber.subscribedToChannel = req.body.subscribedToChannel;
  // }
  try {
    // const updatedSubscriber = await res.subscriber.save();
    // res.json(updatedSubscriber)
    // users.push(user);

    updateUser();
    res.redirect(301, '/api/users');
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 5. DELETE /api/users/:id  --Delete a specific user
router.post('/delete/:id', async (req, res) => {
  const id = parseInt(req.params.id); // Get the ID from the URL

  const index = users.findIndex((user) => user.id === id);

  if (index === -1) {
    return res.status(404).send('User not found'); // Handle not found case
  }

  await users.splice(index, 1); // Remove the user from the array
  res.json({ message: 'User deleted successfully' });
  res.redirect(301, '/api/users');
});

export default router;
