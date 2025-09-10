const express = require("express");
require("dotenv").config(); 

const app = express();

app.get("/home", (req, res) => {
  if (process.env.FEATURE_NEW_HOME === "true") {
    return res.json({ home: "NEW HOME EXPERIENCE" });
  }
  res.json({ home: "old home" });
});

app.listen(3000, () => console.log("running on port : 3000"));
