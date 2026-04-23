import express from 'express';
import morgan from 'morgan';
import authRouter from './routes/auth.route.js';
// import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser());

// app.use(express.urlencoded({ extended: true }));
// const JWT_SECRET = 'your-jwt-secret-key';

app.use('/api/auth', authRouter);

export default app;
