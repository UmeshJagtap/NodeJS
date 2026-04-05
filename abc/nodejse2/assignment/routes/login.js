// TODO : Add cookie-parser for JWT

import express from 'express';
import bcrypt from 'bcrypt';
import fs from 'fs';

import jwt from 'jsonwebtoken';
// import bodyParser from 'body-parser';
// import cookieparser from 'cookie-parser';
// import cors from 'cors';

// const app = express();
// app.use(bodyParser.json());
// // Built-in Express middleware for parsing JSON and URL-encoded data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({
//   allowedHeaders: ['Authorization', 'Content-Type'],
// }));

const JWT_SECRET = 'your-jwt-secret-key';

const router = express.Router();
const users = JSON.parse(fs.readFileSync('users.json', 'utf8'));

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body || {};
  let isLoggedIn = false;
  // console.log('Login Data received : ', email, password);

  let user_logging_in = users.find((user) => user.email === email);
  console.log('user_logging_in :- ', user_logging_in);
  if (!user_logging_in)
    return res.status(400).json({ message: 'emp not found' });

  // const usersWithRoleSuperAdmin = users.filter(user => user.role === "SuperAdmin");
  // const usersWithRoleEditAdmin = users.filter(user => user.role === "EditAdmin");

  let match = await bcrypt.compare(password, user_logging_in.password);
  console.log('match : ', match);

  if (!match) {
    return res.status(400).json({ message: 'invalid credentials' });
  } else {
    // isLoggedIn = true;
    // res.status(200).send('Login successful!');
    // console.log('Login successful!');

    // Create payload for JWT
    const payload = {
      id: user_logging_in.id,
      email: user_logging_in.email,
      role: user_logging_in.role,
    };

    // Sign token
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '5m' });
    // res.json({ message: 'Login successful', token, user_logging_in });
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      maxAge: 5 * 60 * 1000,
    });

    console.log('Login successful!', token);
    console.log('redirecting to user-list page');
    res.redirect(301, '/api/users');
  }

  // if (isLoggedIn) {
  //   res.redirect(301, '/api/users');
  //   console.log('redirecting to user-list page');
  //   // console.log('user_logging_in :- ' + JSON.stringify(user_logging_in));
  // }
});

export default router;

// const authenticate = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(401).json({ message: "Access Denied" });

//   try {
//     const verified = jwt.verify(token, process.env.TOKEN_SECRET);
//     req.user = verified; // Store user info for the next handler
//     next();
//   } catch (err) {
//     res.status(400).json({ message: "Invalid Token" });
//   }
// };
