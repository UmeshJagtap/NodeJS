// const express = require('express');
// require('dotenv').config();
import express from 'express';
import 'dotenv/config';

// const empRoutes = require('../assignment/routes/empRoutes');
import empRoutes from './routes/empRoutes.js';

const app = express();

app.use(express.json());

// app.use('api/emps', empRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Hello Node.js v${process.versions.node}!`);
  console.log(`server connected on PORT : ${process.env.PORT}!`);
});

//
// FUNC TEST -----------------------------
// console.log(`Hello Node.js v${process.versions.node}!`);
// console.log(`PORT : ${process.env.PORT}!`);

const users = [
  {
    id: 1,
    empname: 'Rohan',
    email: 'Rohan@gmail.com',
    password: 'Rohan123',
  },
  {
    id: 2,
    empname: 'Rohan2',
    email: 'Rohan2@gmail.com',
    password: 'Rohan123',
  },
];
// console.log(users);

// let email = 'Rohan2@gmail.com';
// const user_logging_in = users.find((user) => user.email === email);
// console.log(user_logging_in);

//
// OUTPUT --------------------------------
// node index.js
// SyntaxError: Unexpected token

//
// DEFAULT APP ---------------------------
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
