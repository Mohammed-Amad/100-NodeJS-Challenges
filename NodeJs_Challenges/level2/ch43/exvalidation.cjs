const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); 

app.post("/users", (req, res) => {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }
  res.json({ message: `User with email ${email} created` });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});