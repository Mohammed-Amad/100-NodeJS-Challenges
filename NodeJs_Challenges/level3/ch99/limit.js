const express = require('express');
const Redis = require('ioredis');

const app = express();
const client = new Redis();

const MAX_BUCKET = 10;
const FILL_RATE = 1; 

app.use(async (req, res, next) => {
  const redisKey = `limit:${req.ip}`;
  const currentTime = Date.now();

  const state = await client.hgetall(redisKey);
  let available = state.tokens ? Number(state.tokens) : MAX_BUCKET;
  const prevTime = state.last ? Number(state.last) : currentTime;

  // refill
  available += (currentTime - prevTime) / 1000 * FILL_RATE;
  if (available > MAX_BUCKET) available = MAX_BUCKET;

  if (available < 1) {
    return res.status(429).send('Too Many Requests');
  }

  await client.hset(redisKey, { tokens: available - 1, last: currentTime });
  next();
});

app.get('/', (req, res) => res.send('Hello World'));
app.listen(3000, () => console.log('server running on port : 3000'));
