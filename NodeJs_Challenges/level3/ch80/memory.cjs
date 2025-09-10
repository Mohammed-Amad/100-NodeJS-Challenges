// level3/ch80/memory.cjs
const express = require("express");
const app = express();

let cache = null, cacheTime = 0;

app.get("/data", (req, res) => {
  const now = Date.now();
  if (cache && now - cacheTime < 5000) {
    return res.json({ ...cache, cached: true });
  }
  cache = { msg: "fresh data", ts: now };
  cacheTime = now;
  res.json({ ...cache, cached: false });
});

app.listen(3000, () => console.log("Server  is running : 3000"));
