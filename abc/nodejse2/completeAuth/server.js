import app from './src/app.js';
import connectDB from './src/config/database.js';

connectDB();

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// import express from 'express';
// import morgan from 'morgan';
// // import jwt from 'jsonwebtoken';
// // import cookieparser from 'cookie-parser';

// const app = express();

// // app.use(cookieparser());
// app.use(express.json());
// app.use(morgan('dev'));

// // app.use(express.urlencoded({ extended: true }));

// const JWT_SECRET = 'your-jwt-secret-key';
