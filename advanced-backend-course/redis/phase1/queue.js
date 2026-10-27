import { Queue } from 'bullmq';
import Redis from 'ioredis';
// import { redis } from './index.js';  // conn can be reused from index.js

const connection = new Redis(
  process.env.REDIS_URL || 'redis://localhost:6379',
  {
    maxRetriesPerRequest: null,
    // enableReadyCheck: false,
  }
);

const emailQueue = new Queue('emailQueue', {
  connection,
});

export default emailQueue;

// Queues :-
// Notification queue
// Email queue
