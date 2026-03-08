import express from 'express';

// const bcrypt = require('bcrypt.js');
import bcrypt from 'bcryptjs';

// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';

// const db = require("../config/database");
// const verifyToken = require('../middleware/auth');
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
];

router.post('/create', async (req, res) => {
  const { empname, email, password } = req.body;

  const hashpwd = await bcrypt.hash(password, 10);

  const new_user = {
    empname: empname,
    email: email,
    password: hashpwd,
  };
  users.push(new_user);
  res.json({ message: 'emp created' });

  // const query = 'insert into emps (name, email, password) values (?, ?, ?)';

  // db.query(query, [empname, email, hashpwd)], (err, result) => {
  // 	if(err) return res.status(500).json(err);
  // 	res.json({ message: "emp created"});
  // });
});

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // const user_logging_in = users.find({user} => user.email === email);
  if (!user_logging_in)
    return res.status(400).json({ message: 'emp not found' });

  // const usersWithRoleUser = users.filter(user => user.role === "User");

  const match = bcrypt.compare(password, emp.password);

  if (!match) {
    return res.status(400).json({ message: 'invalid credentials' });
  }
  const token = jwt.sign({ id: emp.id, email: emp }, process.env.JWT_SECRET, {
    expiresIn: '30',
  });

  res.json({ token });

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
  res.json({ message: 'protected data', emp: req.emp });
});

// module.exports = router;
export default router;
