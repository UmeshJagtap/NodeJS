import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'no token' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], process.env.JWT_SECRET);
    req.emp = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'invalid token' });
  }
};

export default verifyToken;
