const express = require("express");
const app = express();

const limits = {};

app.use((req, res, next) => {
  const ip = req.ip;
  const now = Date.now();

  if (!limits[ip]) limits[ip] = [];
  limits[ip] = limits[ip].filter(t => now - t < 60000);

  if (limits[ip].length >= 60) {
    return res.status(429).send("Too many requests, try again later");
  }

  limits[ip].push(now);
  next();
});

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
