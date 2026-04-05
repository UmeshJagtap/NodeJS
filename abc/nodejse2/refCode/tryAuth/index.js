// const express = require('express');
// require('dotenv').config();
import express from 'express';
import 'dotenv/config';

// const empRoutes = require('../assignment/routes/empRoutes');
import empRoutes from './routes/empRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/emps', empRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Hello Node.js v${process.versions.node}!`);
  console.log(`Server connected and running on PORT : ${process.env.PORT}!`);
});

// Running above app
// GET >> http://localhost:3000/api/emps/profile
// Output
// {"message":"no token"}
// POST >> http://localhost:3000/api/emps/login

// FUNC TEST -----------------------------
// console.log(`Hello Node.js v${process.versions.node}!`);
// console.log(`PORT : ${process.env.PORT}!`);

// const users = [
//   {
//     id: 1,
//     empname: 'Rohan',
//     email: 'Rohan@gmail.com',
//     password: 'Rohan123',
//   },
//   {
//     id: 2,
//     empname: 'Rohan2',
//     email: 'Rohan2@gmail.com',
//     password: 'Rohan123',
//   },
// ];
// console.log(users);

// let email = 'Rohan2@gmail.com';
// const user_logging_in = users.find((user) => user.email === email);
// console.log(user_logging_in);

// OUTPUT --------------------------------
// nodemon index.js
// Hello Node.js v23.11.0!
// server connected on PORT : 3000!

// DEFAULT APP ---------------------------

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });

// ------------------------------ TEST AUTH2 (WORKING)

// // app.js (or server.js or index.js)

// import express from 'express';

// const app = express();

// import authRouter from './routes/auth2.js'; // Import the router

// const PORT = process.env.PORT || 3000;

// // Built-in middleware to parse JSON and URL-encoded bodies
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // Allows parsing of form data

// // Mount the authRouter at the /auth path
// // This means all routes defined in auth.js will be prefixed with /auth
// app.use('/auth', authRouter);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
