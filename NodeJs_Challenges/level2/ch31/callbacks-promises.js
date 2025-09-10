import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

try {
  const d31 = await readFile(path.join(__dirname, "a.txt"));
  console.log(d31.length);
} catch (err) {
  console.error(err);
}
