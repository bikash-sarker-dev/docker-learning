const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();

const server = http.createServer(app);

app.use(cors());

const oi = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

oi.on("connection", (socket) => {
  console.log("socket", socket.id);
  socket.on("room_join", (room) => {
    socket.join(room);
    console.log("this room", room);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("recive_message", data);
    console.log("message", data);
  });

  // socket.on("typing", ({ username, room }) => {
  //   socket.to(room).emit("user_type", username);
  //   console.log(username);
  // });
  socket.on("typing", ({ username, room }) => {
    socket.to(room).emit("user_typing", username);
  });
});

server.listen("4000", () => {
  console.log("the server runing port 4000");
});
