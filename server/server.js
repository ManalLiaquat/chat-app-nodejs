const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;
const app = express();
let server = http.createServer(app);
let io = socketIO(server);

// console.log(__dirname + "\\..\\public");
// console.log(publicPath);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newEmail", {
    from: "manal@example.com",
    text: "Hey. What is going on.",
    createdAt: 123
  });

  socket.emit("newMessage", {
    from: "manal@example.com",
    text: "kaha ho?",
    createdAt: 145
  });

  socket.on("createMessage", createdMessage => {
    console.log("createMessage: ", createdMessage);
  });

  socket.on("createEmail", createdEmail => {
    console.log("createEmail: ", createdEmail);
  });

  socket.on("disconnect", () => {
    console.log("User was disconnected");
  });
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
