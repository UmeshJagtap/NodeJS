import express from 'express';
import 'dotenv/config';

import loginRouter from './routes/login.js';
import usersRouter from './routes/users.js';

// const users = [
//   {
//     name: 'Umesh J',
//     email: 'umesh321@gmail.com',
//     password: 'umesh14276jagtap',
//     imageurl:
//       'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     birthdate: '1997-02-23',
//     role: 'SuperAdmin',
//   },
//   {
//     name: 'Rohan R',
//     email: 'rohan123@gmail.com',
//     password: 'helloRohan4523',
//     imageurl:a
//       'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     birthdate: '1994-02-18',
//     role: 'EditAdmin',
//   },
//   {
//     name: 'Raj K',
//     email: 'rajkamble9536@gmail.com',
//     password: 'welcomeRaj2349',
//     imageurl:
//        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
//     birthdate: '1996-07-27',
//     role: 'ViewAdmin',
//   },
// ];

const app = express();

app.use(express.static('uploads'));

app.set('view engine', 'ejs');

// Middleware to parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.use('/', loginRouter);
app.use('/api/users', usersRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on ${process.env.PORT}`);
});

// Sample Data to POST
// http://localhost:3000/create-user
// {
//   "name":"Umesh",
//   "email":"Umesh123@mail.com",
//   "password":"Umesh123",
//   "image": "http://abc.img.com"
// }

// GET http://localhost:3000/api/users
// GET http://localhost:3000/api/users/:id

// 1. GET /api/users
// 2. GET /api/users/:id
// 3. POST /api/users
// 4. PUT /api/users/:id
// 5. DELETE /api/users/:id

// My Endpoints
// http://localhost:3000
// http://localhost:3000/user-form
// http://localhost:3000/api/user-list

//
// Default App ----------------------------------------------------<<*>>
//
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
