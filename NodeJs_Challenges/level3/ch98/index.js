import express from "express";

const app = express();

app.use(express.json({ limit: "100kb" }));

app.post("/data", (req, res) => {
  res.json({ received: true });
});

app.listen(3000, () => {
  console.log(" Server is running on port :3000");
});