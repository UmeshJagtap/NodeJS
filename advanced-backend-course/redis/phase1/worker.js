import { Queue, Worker } from 'bullmq';
import Redis from 'ioredis';
import sendEmail from './lib/sendEmail.js';

const connection = new Redis(
  process.env.REDIS_URL || 'redis://localhost:6379',
  {
    maxRetriesPerRequest: null,
  }
);

const worker = new Worker(
  'emailQueue',
  async (job) => {
    console.log('Job started for email:', email);
    const email = job.data.email;
    await sendEmail(email);
    console.log('Job completed for email:', email);
  },
  { connection }
);

export default worker;

// Note* : Run this file seperately :
// advanced-backend-course/redis/phase1$ node worker.js

// Queues :-
// Notification queue
// Email queue
