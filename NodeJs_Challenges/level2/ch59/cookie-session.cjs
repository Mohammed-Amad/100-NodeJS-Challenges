const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser("secret"));

app.get("/set", (req, res) => {
  res.cookie("sid", "123", { signed: true });
  res.send("cookie set");
});

app.get("/get", (req, res) => {
  res.send("sid=" + req.signedCookies.sid);
});

app.listen(3000);
