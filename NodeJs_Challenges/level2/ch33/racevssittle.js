import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Race : returns the first settled promise
Promise.race([
  readFile(path.join(__dirname, "a.txt")),
  readFile(path.join(__dirname, "missing.txt")),
])
  .then(d => console.log("Race:", d.length))
  .catch(e => console.error("Race error:", e.code));

// AllSettled : returns all results with their status
Promise.allSettled([
  readFile(path.join(__dirname, "a.txt")),
  readFile(path.join(__dirname, "missing.txt")),
])
  .then(r => console.log("AllSettled:", r));
