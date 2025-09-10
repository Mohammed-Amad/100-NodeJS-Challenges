const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors({
  origin: "https://app.example.com"
}));

app.get("/", (req, res) => {
  res.json({ message: "CORS enabled for https://app.example.com only" });
});

app.listen(3000, () => {
  console.log("Server running on port :3000");
});
