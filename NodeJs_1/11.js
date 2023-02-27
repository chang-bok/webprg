const express = require("express");
const app = express();

app.set("view engine", "jade");
app.set("views", "./views"); // 생략가능(default)

const port = 3000;

app.get("/", function (req, res) {
  res.render("pug_2");
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
