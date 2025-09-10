const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

fs.createReadStream(path.join(__dirname, 'big.txt'))
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream(path.join(__dirname, 'big.txt.gz')));
