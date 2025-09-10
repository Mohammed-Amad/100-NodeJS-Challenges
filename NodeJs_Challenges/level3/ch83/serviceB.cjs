const express = require("express");
const app = express();

app.get("/sum", (req, res) => {
  const a = Number(req.query.a), b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) return res.status(400).json({ error: "bad params" });
  res.json({ sum: a + b });
});

app.listen(4001, () => console.log("Service B is running on port 4001"));