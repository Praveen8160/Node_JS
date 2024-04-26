const http = require("http");
const express = require("express");
const { join } = require("path");
const app = express();
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  connectionStateRecovery: {},
});

io.on("connection", (socket) => {
//   console.log("a user connected", socket.id);

  socket.on("message", (msg) => {
    io.emit("msg", `${socket.id} ${msg}`);
  });

//   socket.on("disconnect", () => {
//     console.log("user disconnected", socket.id);
//   });
});
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

server.listen(8000, console.log(`server run on http://localhost:8000`));
