const fs = require('fs');
const path = require('path');

const r = fs.createReadStream(path.join(__dirname, 'big.txt'));
const w = fs.createWriteStream(path.join(__dirname, 'big-copy.txt'));

r.on('data', chunk => {
  const ok = w.write(chunk);
  if (!ok) {
    r.pause();
    w.once('drain', () => r.resume());
  }
});

r.on('end', () => w.end());
r.on('error', err => { throw err; });
w.on('error', err => { throw err; });
