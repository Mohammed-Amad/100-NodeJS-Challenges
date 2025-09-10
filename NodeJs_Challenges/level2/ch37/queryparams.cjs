const http = require("http");
const { URL } = require("url");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url.includes("/greet")) {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const username = parsedUrl.searchParams.get("name") ?? "Guest";

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello, ${username}!`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("server is running at port 3000");
});
