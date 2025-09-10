const express = require("express");
const { z } = require("zod");

const app = express();
app.use(express.json());

const schema = z.object({
  email: z.string().email(),
  age: z.number().int().min(0),
});

app.post("/user", (req, res) => {
  const result = schema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      error: result.error.issues.map(i => ({
        path: i.path,
        code: i.code,
        message: i.message
      }))
    });
  }
  res.json({ ok: true, data: result.data });
});

app.listen(3000, () => console.log("Server is running on :3000"));
