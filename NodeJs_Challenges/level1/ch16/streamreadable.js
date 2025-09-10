const fs = require('fs');
const path = require('path');

let lines = 0;
let leftover = '';

fs.createReadStream(path.join(__dirname, 'input.txt'), 'utf8')
  .on('data', chunk => {
    const s = leftover + chunk;
    const parts = s.split('\n');
    leftover = parts.pop();
    lines += parts.length;
  })
  .on('end', () => {
    if (leftover) lines++;
    console.log(lines);
  })
  .on('error', err => { throw err; });
