import express from 'express';
import morgan from 'morgan';
// import jwt from 'jsonwebtoken';
// import cookieparser from 'cookie-parser';

const app = express();

// app.use(cookieparser());
app.use(express.json());
app.use(morgan('dev'));

// app.use(express.urlencoded({ extended: true }));
// const JWT_SECRET = 'your-jwt-secret-key';

export default app;
