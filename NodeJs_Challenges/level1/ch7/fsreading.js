const fs = require('fs');
const path = require('path');

const buf = fs.readFileSync(path.join(__dirname, 'data.txt'));
console.log(buf.length);
console.log(buf.toString());  
fs.readFile(path.join(__dirname, 'data.txt'), (err, data) => {
  if (err) throw err;
  console.log(data.length);
  console.log(data.toString());
});
 

