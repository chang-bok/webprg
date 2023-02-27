const express = require("express");
const app = express();
const port = 3000;

app.get("/topic", function (req, res) {
  var topic = [
    // 배열 선언
    "JavaScript is .....",
    "Nodejs is .........",
    "Express is ......",
  ];

  var output = `
    <a href = "topic?id=0">JavaStript</a><br>
    <a href = "topic?id=1">Nodejs</a><br>
    <a href = "topic?id=2">Express</a><br><br>
    ${topic[req.query.id]} 
    `;
  res.send(output);
});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
