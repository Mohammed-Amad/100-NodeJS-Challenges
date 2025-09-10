const fs = require("fs");

fs.readFile("./file.txt", () => {
  setImmediate(() => console.log("after-read"));
});