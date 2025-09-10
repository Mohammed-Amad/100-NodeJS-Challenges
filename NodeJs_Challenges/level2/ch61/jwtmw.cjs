const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const SECRET = "mysecret";


function auth(req, res, next) {
  const header = req.headers.authorization || "";
  const [type, token] = header.split(" ");
  if (type !== "Bearer" || !token) return res.status(401).json({ error: "No token" });
  try {
    req.user = jwt.verify(token, SECRET, { algorithms: ["HS256"] });
    next();
  } catch {
    res.status(401).json({ error: "Invalid token" });
  }
}


app.get("/secure", auth, (req, res) => res.json({ user: req.user }));

app.listen(3000, () => console.log("server is running at port :3000"));
