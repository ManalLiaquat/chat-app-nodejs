let socket = io();

socket.on("connect", function() {
  console.log("Connected to server");
});

socket.emit("createEmail", {
  to: "nehal@example.com",
  text: "Hey. This is manal"
});

socket.emit("createMessage", {
  from: "nehal@example.com",
  text: "kahi nahi"
});

socket.on("newMessage", function(newMessage) {
  console.log("Recieved a new msg: ", newMessage);
});

socket.on("newEmail", function(newEmail) {
  console.log("New email: ", newEmail);
});

socket.on("disconnect", function() {
  console.log("Disconnected from server");
});
