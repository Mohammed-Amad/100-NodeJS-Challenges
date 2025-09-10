import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const [a, b] = await Promise.all([
    readFile(path.join(__dirname, "a.txt")),
    readFile(path.join(__dirname, "b.txt")),
  ]);
  console.log(a.length + b.length);
} catch (err) {
  console.error(err);
}
