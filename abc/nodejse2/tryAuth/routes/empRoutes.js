import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// const db = require("../config/database");
import verifyToken from '../middleware/auth.js';

const router = express.Router();

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
  {
    id: 3,
    empname: 'Umesh',
    email: 'Umesh123@mail.com',
    password: 'Umesh123',
  },
];

let loginToken = '';

router.post('/create', async (req, res) => {
  const { empname, email, password } = req.body;

  const hashpwd = await bcrypt.hash(password, 10);

  const new_user = {
    empname: empname,
    email: email,
    password: hashpwd,
  };
  users.push(new_user);
  console.log('users : ', users);
  res.json({ message: 'emp created' });

  // const query = 'insert into emps (name, email, password) values (?, ?, ?)';

  // db.query(query, [empname, email, hashpwd)], (err, result) => {
  // 	if(err) return res.status(500).json(err);
  // 	res.json({ message: "emp created"});
  // });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log('email : ', email);
  console.log('password : ', password);

  const user_logging_in = users.find((user) => user.email === email);
  if (!user_logging_in)
    return res.status(400).json({ message: 'emp not found' });

  // const usersWithRoleUser = users.filter(user => user.role === "User");

  const match = bcrypt.compare(password, user_logging_in.password);

  if (!match) {
    return res.status(400).json({ message: 'invalid credentials' });
  }
  const token = jwt.sign(
    { id: user_logging_in.id, email: user_logging_in.email },
    process.env.JWT_SECRET,
    {
      expiresIn: '30',
    }
  );

  // Set the Authorization header in the response
  // res.set({
  //   Authorization: `Bearer ${token}`,
  // });
  res.setHeader('Authorization', `Bearer ${token}`);

  res.json({ token });
  // loginToken = token;
  console.log('loginToken', token);

  // db.query("select * from emps where email = ?", [email], async (err, result) => {
  //  	if(err) return res.status(500).json(err);

  // 	if (result.length === 0) {
  // 		return res.status(400).json({ message: "emp not found"})
  // 	}
  // 	const emp = result[0];

  // 	const match = await bcrypt.compare(password, emp.password);

  // 	if (!match) {
  // 		return res.status(400).json({message: 'invalid credentials'})
  //   }
  // 	const token = jwt.sign(
  // 		{id: emp.id, email: emp},
  // 		process.env.JWT_SECRET,
  // 		{expiresIn: "30"}
  // 	);
  // 	// jwt Token >> asass.aada.xxsax  aka  header.payload.signature

  // 	res.json({token})
  // })
});

// Authorization: Bearer TOKEN

router.get('/profile', verifyToken, (req, res) => {
  consol.log('Entered in /profile');
  console.log('/profile token', loginToken);
  res.set('Content-Type', 'text/plain'); // Set a single header
  res.set({
    'Cache-Control': 'no-cache', // Set multiple headers using an object
    // 'X-Custom-Header': 'my-value',
  });

  res.send('protected data');
  //
  res.json({ message: 'protected data', emp: req.emp });
});

// module.exports = router;
export default router;

// OUTPUT
// POST >> http://localhost:3000/api/emps/login
//
// Body >> raw >> JSON
// {
//   "email": "Rohan@gmail.com",
//   "password": "Rohan123"
// }
//
// {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJSb2hhbkBnbWFpbC5jb20iLCJpYXQiOjE3NzI5OTE5ODcsImV4cCI6MTc3Mjk5MTk4N30.v3L-BjrD59heeOEWd_v7Xze-DYPDi-ww1-P9xIJLsiA"}
//
// POST >> http://localhost:3000/api/emps/create
// Body >> raw >> JSON
// {
//   "empname":"Umesh",
//   "email":"Umesh123@mail.com",
//   "password":"Umesh123"
// }
//
// {
//   "message": "emp created"
// }
//
// Issue :- JSON not getting updated
