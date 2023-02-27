const express = require("express");
const app = express();
app.set("view engine", "jade");
app.set("views", "./views");
var bodyParser = require("body-parser"); // post 전송 미들웨어
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", function (req, res) {
  res.render("form"); // form.Jade
});

app.get("/topic", function (req, res) {
  // get 방식
  var title = req.query.title;
  var description = req.query.description;
  res.send("Get 방식 : " + title + ", " + description);
});

app.post("/topic", function (req, res) {
  // post 방식
  var title = req.body.title;
  var description = req.body.description;
  res.send("Post 방식 : " + title + ", " + description);
});
