const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isPrimary) {
  const numCPUs = os.availableParallelism();
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {

  http.createServer((req, res) => {
    res.end(`Hello from worker ${process.pid}`);
  }).listen(3000, () => {
    console.log(`Worker ${process.pid} started`);
  });
}
