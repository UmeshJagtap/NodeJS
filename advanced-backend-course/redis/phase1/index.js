import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import User from './model/user.model.js';
import Redis from 'ioredis';
import rateLimitter from './middleware/ratelimit.js';
import sendEmail from './lib/sendEmail.js';
import emailQueue from './queue.js';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
const redis = new Redis(process.env.REDIS_URL);
export default redis;

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'hello from redis-- 2026' });
});

app.post('/create', async (req, res) => {
  const { name, email, password } = req.body;
  console.log('req.body', req.body);
  await redis.del('user-all'); // delete the cache for user:all key, so that next time when
  const user = await User.create({
    name,
    email,
    password,
  });
  // email: 'qwerty' + Date.now() + '@gmail.com',
  // password: 'try123*()',

  // await sendEmail();
  await emailQueue.add('send-email', { email });

  return res.status(200).json(user, { message: 'user created successfully' });
});

app.get('/get', rateLimitter, async (req, res) => {
  const users = await User.find({});
  return res.json(users, { message: 'users fetched successfully' });
});

app.get('/get-with-redis', async (req, res) => {
  const cached = await redis.get('user:all');

  if (cached) {
    const users = JSON.parse(cached);
    return res.json(users, {
      message: 'users fetched successfully from cache',
    });
  }

  const users = await User.find({});
  await redis.set('user:all', JSON.stringify(users), 'EX', 10); // expire in 10 seconds

  return res.json(users);
});

app.post('/send-otp', async (req, res) => {
  const { email } = req.body;

  const otp = Math.floor(100000 + Math.random() * 900000);
  await redis.set(`otp:${email}`, otp, 'EX', 300); // expire in 5 minutes
  // return res.status({ otp });
  return res.json({ message: 'OTP sent successfully', otp });
});

app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  const cached_otp = await redis.get(`otp:${email}`);

  if (!cached_otp) {
    return res
      .status(400)
      .json({ message: 'OTP not found or has been expired' });
  }

  if (cached_otp !== otp) {
    return res.status(400).json({ message: 'Invalid OTP' });
  }

  await redis.del(`otp:${email}`); // delete the otp after successful verification
  return res.json({ message: 'OTP verified successfully' });
});

app.listen(port, () => {
  connectDb();
  console.log(`server started ${port}`);
});

// GET : ('/get') without redis  --- 64ms
// GET : ('/get-with-redis') with redis --- 3ms

// POST ('/create') : without queue  --- 5.08sec
// POST ('/create') : with queue --- 76-56ms
