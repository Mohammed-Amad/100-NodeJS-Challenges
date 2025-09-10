const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  if (username === "admin" && password === "123") {
    const token = jwt.sign({ userId: 1 }, "secret", { algorithm: "HS256" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
});

app.listen(3000, () => console.log("server is running at port :3000"));
