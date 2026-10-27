=== docker ===
--docker run -it test_image
--docker exec -it test-image bash
--Dockerfile, .dockerignore
--docker build ( docker build -t test-image . )
--docker port mapping ( docker run -p 8000:7000 myapp )
--docker environment variable ( docker run -e PORT=7000 -p 8000:7000 myapp )
--docker customImage push to docker-hub
$ docker login
$ docker build -t virtualcode27/test-image .
$ docker push virtualcode27/test-image
--docker compose
[] backend
[] frontend !!
[] redis
docker compose up --build
--docker network
docker run -it ubuntu
docker network inspect bridge (default)
docker run -it --network host ubuntu
docker network inspect host
docker run -it -e PORT=8000 --network none -p 8000:8000 virtualcode27/test-image
docker network create ayush
docker run -it -e PORT=8000 --network ayush virtualcode27/test-image
--docker volumes
docker run -it -v "D:\docker volumes:/app/models" virtualcode27/test-image (Bind Mount)
docker run -it -v "ayush:/app/models" virtualcode27/test-image (Named Volume)

=== redis ===

## Caching

import Redis from 'ioredis';
const redis = new Redis(process.env.REDIS_URL);
await redis.get('user:all');
await redis.set('user:all', JSON.stringify(users), 'EX', 10);
await redis.del('user-all');

## Create / Verify OTP

await redis.set(`otp:${email}`, otp, 'EX', 300); // expire in 5 minutes
await redis.get(`otp:${email}`);
await redis.del(`otp:${email}`);

## Rate Limiting

const key = `rate_limit:${ip}`;
await redis.incr(key);
await redis.expire(key, 60);
await redis.ttl(key);

## Sessions

const token = jwt.sign({ userId: user.id }, secret)
await redis.set(`session:${user.id}`, token, "EX", 86400)

## Queues !!!!!

await emailQueue.add('send-email', { email });

=== system-design ===
