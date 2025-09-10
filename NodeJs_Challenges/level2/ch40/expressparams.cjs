const express = require("express");
const app = express();
const PORT = 3000;

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  res.json({ id });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});