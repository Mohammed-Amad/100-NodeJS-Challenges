const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/hello') {
    res.statusCode = 200;
    res.end('Hello');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
}).listen(3000);
