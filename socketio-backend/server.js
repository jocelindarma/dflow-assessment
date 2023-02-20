const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connect", (socket) => {
  console.log(`User ${socket.id} is connected`);

  socket.on("join_group", (group) => {
    socket.join(group);
    console.log(`User ${socket.id} joined group ${group}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.group).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log(`User ${socket.id} is disconnected`);
  });
});

server.listen(3001, () => {
  console.log("Server running on port 3001");
});
