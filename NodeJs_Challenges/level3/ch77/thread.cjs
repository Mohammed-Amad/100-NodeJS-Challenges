const { Worker, isMainThread, parentPort, workerData } = require("worker_threads"); 
function fib(n) { return n < 2 ? n : fib(n - 1) + fib(n - 2); } 
if (isMainThread) { const worker = new Worker(__filename, { workerData: 40 });
 worker.on("message", (msg) => console.log("Result:", msg)); } 
 else { const result = fib(workerData); parentPort.postMessage(result); }