
const express = require("express");
const app = express();

const B_URL = "http://localhost:4001";

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
async function callServiceB(a, b, retries = 3, delay = 200) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      const r = await fetch(`${B_URL}/sum?a=${a}&b=${b}`);
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return await r.json();
    } catch (e) {
      lastErr = e;
      if (i === retries) break;
      await sleep(delay);
      delay *= 2;
    }
  }
  throw lastErr;
}

app.get("/calc", async (req, res) => {
  try {
    const { a, b } = req.query;
    const data = await callServiceB(a, b);
    res.json({ from: "A", ...data });
  } catch (e) {
    res.status(502).json({ error: "B unavailable" });
  }
});

app.listen(3000, () => console.log("Service A is running on http://localhost:3000/calc"));
