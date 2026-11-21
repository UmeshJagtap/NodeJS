import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import User from './model/user.model.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res
    .status(200)
    .json({ message: `hello from server-sleepy_blackwell-${process.env.SERVER_NAME} @ 2026` });
});

app.get('/get', async (req, res) => {
  const users = await User.find({});
  return res.json(users, { message: 'users fetched successfully' });
});

app.listen(port, () => {
  connectDb();
  console.log(`server started ${port}`);
});

