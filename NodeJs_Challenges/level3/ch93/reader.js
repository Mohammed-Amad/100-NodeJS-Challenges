const fs = require("fs");

function readMessage(cb) {
  fs.readFile("file.txt", "utf8", (err, data) => {
    if (err) return cb(err);
    cb(null, data);
  });
}

module.exports = readMessage;
