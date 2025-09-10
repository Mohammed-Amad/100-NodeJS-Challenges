const express = require("express");
const app = express();
const PORT = 3000;


app.get("/", (req, res, next) => {

  next(new Error("Something went wrong"));
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running at port : ${PORT}`);
});
