const fs = require('fs');

console.time('read');
fs.readFile('large.bin', () => {
  console.timeEnd('read'); 
});
