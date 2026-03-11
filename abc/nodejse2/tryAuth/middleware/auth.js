// const jwt = require('jsonwebtoken');
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
    // return res.status(401).json({ message: 'invalid token' });
    console.log(err);
  }
};

// module.exports = verifyToken;
export default verifyToken;

// REF :-

// // In an Express route handler or middleware
// const authenticateToken = (req, res, next) => {
//   // 1. Get the authorization header value
//   const authHeader = req.headers['authorization']; // Can use both 'authorization' or ['authorization']

//   // 2. Check if the header exists and has the expected format (e.g., starts with 'Bearer ')
//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//       return res.status(401).send('Authorization failed. No access token.');
//   }

//   // 3. Extract the actual token using array destructuring or split/index
//   // This is valid ES6+
//   const token = authHeader.split(' ')[1]; // Splits "Bearer <token>" into ["Bearer", "<token>"]

//   // 4. Verify the token (using a library like jsonwebtoken)
//   // jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//   //     if (err) {
//   //         return res.status(403).send('Could not verify token');
//   //     }
//   //     req.user = user; // Attach the user payload to the request object
//   //     next(); // Proceed to the next middleware or route handler
//   // });
// };
