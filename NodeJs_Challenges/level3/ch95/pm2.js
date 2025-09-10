import http from "http";

http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("hello");
  }
  res.statusCode = 404;
  res.end();
}).listen(3000, () => console.log("server running on port : 3000"));
/* 
Started the app in cluster mode on all CPUs:
pm2 start level3/ch95/pm2.js -i max --name app

Performed zero-downtime reload:
pm2 reload app

Load-tested continuous responses (PowerShell):
while ($true) { (Invoke-WebRequest -UseBasicParsing http://localhost:3000/).Content; Start-Sleep -Milliseconds 200 }



*/ 
