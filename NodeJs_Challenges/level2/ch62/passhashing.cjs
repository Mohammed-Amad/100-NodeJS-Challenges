const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const USERS = []; 


app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Username and password required" });

  const hash = await bcrypt.hash(password, 10); 
  USERS.push({ username, password: hash });

  res.json({ message: "User registered" });
});


app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(401).json({ error: "Invalid credentials" });

  res.json({ message: "Login successful" });
});


app.listen(3000, () => {
  console.log("Server running on port : 3000");
});
