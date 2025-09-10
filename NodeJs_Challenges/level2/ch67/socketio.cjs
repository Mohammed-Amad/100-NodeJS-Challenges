
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("joinRoom", () => {
    socket.join("room1");
    console.log("joined room1");
  });

  socket.on("message", (msg) => {
    io.to("room1").emit("message", msg);
  });
});

httpServer.listen(3000, () => console.log("Socket.IO on 3000"));
