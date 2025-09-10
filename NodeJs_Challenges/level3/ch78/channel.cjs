const { Worker, isMainThread, parentPort, MessageChannel } = require("worker_threads");

if (isMainThread) {
  const { port1, port2 } = new MessageChannel();
  const worker = new Worker(__filename);

  worker.postMessage(port2, [port2]);

  port1.on("message", (msg) => console.log("From worker:", msg));
  port1.postMessage("Hello from main");
} else {
  parentPort.once("message", (port) => {
 
    port.on("message", (msg) => {
      port.postMessage("Worker got: " + msg);
    });
  });
}
