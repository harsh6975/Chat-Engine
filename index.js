const http = require("http");
const express = require("express");
const route = require("./router/indexRouter");
const socketio = require("socket.io");

const app = express();
const chatServer = http.createServer(app);
const io = socketio(chatServer);

const port = 3000;

app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", "./views");

io.on("connection", (socket) => {
  console.log("chat server connected");
});

app.get("/", route);

app.listen(port, function () {
  console.log("Server running on port ", port);
});
