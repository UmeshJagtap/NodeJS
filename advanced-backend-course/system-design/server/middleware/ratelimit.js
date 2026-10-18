// import redis from '../index.js';
import redis from 'ioredis';

const rateLimitter = async (req, res, next) => {
  const ip = req.ip;
  const key = `rate_limit:${ip}`;
  const requests = await redis.incr(key);

  if (requests === 1) {
    await redis.expire(key, 60); // expire in 60 seconds
  }

  const ttl = await redis.ttl(key);

  if (requests > 5) {
    return res
      .status(429)
      .json({ message: `Too many requests. Try again in ${ttl} seconds` });
  }

  next();
};

export default rateLimitter;
