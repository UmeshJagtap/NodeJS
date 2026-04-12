// NOTES :-

// Redis in Node.js is a powerful in-memory data store used for caching, session management, and real-time data handling.
// It boosts performance by reducing database load and speeding up response times. With Node.js, Redis is commonly used for API caching, pub/sub messaging, rate limiting, and handling queues.
// Its lightning-fast speed, scalability, and support for data structures like strings, hashes, and lists make it ideal for modern apps.
// Developers love Redis for building high-performance, low-latency systems.
// Perfect for microservices, real-time apps, and scalable backend architecture.

// terminal
// $ npm install redis

// client.js ----------
import { url } from 'inspector';
import { createClient } from 'redis';

// Create a reusable client instance
const client = createClient({
  url: 'redis://localhost:6379',
});

export default client;

// connect.js -------------
import client from './client.js';

// Handle connection errors
client.on('error', (err) => {
  console.error('Redis Client Error', err);
});

// Connect before any operation
await client.connect();
console.log('Connected to Redis');

//
// Basic String Ops -------------------------- (*v*)

// SET, GET, DEL

// SET a key
await client.set('username', 'alice');

// GET a key
const name = await client.get('username');
console.log('Username:', name); // Output: Username: alice

// DEL a key
await client.del('username');

// Null if key doesn't exist
const val = await client.get('missing');
console.log('Missing key:', val); // Output: Missing key: null

//
// Cache-Aside Pattern ----------------------------------- (*v*)

// cache miss -> fetch -> store    ( cache hit -> return )

// cache.js -------------

async function getUserById(id) {
  const key = `user:${id}`;

  // 1. Check cache first
  const cached = await client.get(key);
  if (cached) return JSON.parse(cached);

  // 2. Cache miss - fetch from DB
  const user = await db.findUser(id);

  // 3. Store in Redis (60s TTL)
  await client.setEx(key, 60, JSON.stringify(user));
  return user;
}

//
// Setting TTL (Expiry) ----------------------------------- (*v*)

// ttl.js --------------

// setEx(key, seconds, value) - sets value with expiry
await client.setEx('session:abc', 3600, data);

// Or: SET with options object
await client.set('token:xyz', token, {
  EX: 900, // 15 min (seconds)
  NX: true, // Only set if key doesn't exist
});

// Check remaining TTL
const ttl = await client.ttl('session:abc');
console.log('TTL for session:abc:', ttl); // Output: TTL for session:abc: 3599 (seconds)

//
// Best Practices ----------------------------------------- (*v*)

// Single instance, module-level
// Craete one client and export it. Never reconnect pre-connect
// - it wates TCP connections and latency.

// Always attach error listners
// An unhandled 'error' event crashes Node.js. Attach client.on('error', ...)
// before calling .connect().

// Always set a TTL
// Keys without expiry persist forever. Use setEx() or the EX option to prevent
// unbound memory growth.

// Use namespaced keys
// Prefix all keys: user:42, session:abc, cache:posts.
// Prevents collisions and simplifies bulk deletion.

// Use env vars for credentilas
// Store redis:// URLs in .env. Never hardcode passwords or IPs
// - use REDIS_URL from process.env.
