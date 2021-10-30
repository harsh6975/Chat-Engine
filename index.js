const express = require("express");
const route = require("./router/indexRouter");
const port = 3000;

const app = express();

app.use(express.static("./assets"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", route);

app.listen(port, function () {
  console.log("Server running on port ", port);
});
