import { Worker } from 'bullmq';
import Redis from 'ioredis';
import sendEmail from './lib/sendEmail.js';

const connection = new Redis(
  process.env.REDIS_URL || 'redis://localhost:6379',
  {
    maxRetriesPerRequest: null,
  }
);

const paintCar = async (color: string, delay: number): Promise<void> => {
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay); // deley in milli-seconds to simulate car painting
  });

  console.log(
    `Task completed :- Car is Painted successfully with ${color} color`
  );
};

const worker = new Worker(
  'paintQueue',
  async (job) => {
    if (job.name === 'paint-cars') {
      console.log('Job started for paintCar');
      await paintCar(job.data.color, job.data.delay);
      console.log('Job completed for paintCar');
    }
  },
  { connection }
  //   { concurrency: 10 }
);

export default worker;
