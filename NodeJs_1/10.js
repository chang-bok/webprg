const express = require("express");
const app = express();
const port = 3000;

app.get("/topic/:id", function (req, res) {
  var topics = ["Javascript is....", "Nodejs is...", "Express is..."];
  var output = `
<a href="/topic/0">JavaScript</a><br>
<a href="/topic/1">Nodejs</a><br>
<a href="/topic/2">Express</a><br><br>
${topics[req.params.id]} 
`;
  res.send(output);
});
app.get("/topic/:id/:mode", function (req, res) {
  res.send(req.params.id + "," + req.params.mode);
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
