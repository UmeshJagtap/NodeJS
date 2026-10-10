import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import User from './model/user.model.js';
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'hello from redis-- 2026' });
});

app.post('/create', async (req, res) => {
  const { name, email, password } = req.body;
  const user = User.create({
    name,
    email,
    password,
  });
  //   name, email, password,
  //   name: 'umesh',
  //   email: 'qwerty' + Date.now() + '@gmail.com',
  //   password: 'try123*()',
  return res.status(200).json(user, { message: 'user created successfully' });
});

app.get('/get', async (req, res) => {
  const users = User.find({});
  return res.json(users, { message: 'users fetched successfully' });
});

app.listen(port, () => {
  connectDb();
  console.log(`server started ${port}`);
});
