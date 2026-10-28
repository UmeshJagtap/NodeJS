import { Queue } from 'bullmq';

const queue = new Queue('paintQueue');
console.log('Queue created successfully');

export default queue;
