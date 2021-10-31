const http = require("http");
const express = require("express");
const route = require("./router/indexRouter");
const socketio = require("socket.io");

const app = express();

const port = 3000;

app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", "./views");

//run when client connect
const server = http.createServer(app);
const io = socketio(server);
io.on("connection", (socket) => {
  console.log("chat server connected");

  //emit message to me when i join
  socket.emit("message", "my message is hey connected");


  //emit message to all
  // io.emit();

  socket.on("username", (userName)=>{
    console.log(userName);
      socket.broadcast.emit("joinMessage", `${userName} has joined chat.` );
  })
  // when user disconnect
  socket.on("disconnect", function () {
    io.emit("message", "A user left the chat");
  });
});

app.use("/", route);

server.listen(port, function () {
  console.log("Server running on port ", port);
});