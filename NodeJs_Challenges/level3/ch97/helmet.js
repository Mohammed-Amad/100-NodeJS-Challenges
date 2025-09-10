import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet()); 

app.get("/", (req, res) => {
  res.send("Hello im in helmet");
});

app.listen(3000, () => {
  console.log("Server is running on port : 3000 ");
});