const http = require("http");
const express = require("express");
const app = express();
// const ejs = require("ejs");
// app.set("view engine", "ejs");
// app.set("views", "./views");

const server = http.createServer(app);
const hostname = "127.0.0.1";
const port = 3000;

app.set("view engine", "ejs");
// app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
