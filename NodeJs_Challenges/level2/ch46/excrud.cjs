
const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());


let nextId = 1;
let todos = []; 


app.post("/todos", (req, res) => {
  const { title } = req.body || {};
  if (!title) return res.status(400).json({ error: "title is required" });
  const todo = { id: nextId++, title: String(title), done: false };
  todos.push(todo);
  res.status(201).json(todo); 
});


app.get("/todos", (_req, res) => {
  res.json(todos);
});


app.put("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const t = todos.find(x => x.id === id);
  if (!t) return res.status(404).json({ error: "not found" });

  const { title, done } = req.body || {};
  if (title !== undefined) t.title = String(title);
  if (done  !== undefined) t.done  = !!done;

  res.json(t);
});


app.delete("/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  const idx = todos.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({ error: "not found" });
  todos.splice(idx, 1);
  res.sendStatus(204); 
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});