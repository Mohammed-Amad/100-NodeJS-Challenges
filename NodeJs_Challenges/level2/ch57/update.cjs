const express = require("express");
const server = express();

server.get("/", (req, res) => {
  const input = req.query.username || "";
  const safeName = input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  res.send(`Welcome, ${safeName || "Visitor"}`);
});

server.listen(3000, () => {
  console.log("server is running at port 3000");
});
