const { Transform } = require("stream");
 const upper = new Transform({ transform(chunk, enc, cb)
     { cb(null, chunk.toString().toUpperCase()); }
 });
  process.stdin.pipe(upper).pipe(process.stdout);