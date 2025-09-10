const { Transform } = require("stream");
const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "data.csv");
const outputPath = path.join(__dirname, "out.jsonl");

const csvToJson = new Transform({
  transform(chunk, _enc, cb) {
    const lines = chunk.toString().split("\n");
    for (const line of lines) {
      if (!line.trim() || line.startsWith("name")) continue; 
      const [name, age] = line.split(",");
      const obj = { name: name.trim(), age: Number(age) };
      this.push(JSON.stringify(obj) + "\n");
    }
    cb();
  }
});

fs.createReadStream(inputPath)
  .pipe(csvToJson)
  .pipe(fs.createWriteStream(outputPath));