const app = require("express")();

const server = require("http").createServer(app);

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("What is Socket -> ", socket);
  console.log("Socket is active to be connected!");

  socket.on("chat", (payload) => {
    console.log("What is payload -> ", payload);
    io.emit("chat", payload);
  });
});

server.listen(5000, () => {
  console.log("Server is listening at port : 5000...");
});
