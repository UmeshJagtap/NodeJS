import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/auth.route.js';
// import jwt from 'jsonwebtoken';
// import cookieparser from 'cookie-parser';

const app = express();

// app.use(cookieparser());
app.use(express.json());
app.use(morgan('dev'));

// app.use(express.urlencoded({ extended: true }));
// const JWT_SECRET = 'your-jwt-secret-key';

app.use('/api/auth', authRouter);

export default app;
