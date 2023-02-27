const express = require("express");
const app = express();
const port = 3000;
app.get("/", function (req, res) {
  var lis = " "; // 변수 선언
  for (var i = 0; i < 10; i++) {
    // 반복
    lis = lis + "<li>coding</li>";
  }
  var time = Date(); // 현재시간 저장 / 시간 함수
  var output = `
   <body>
        <h1> dynamic </h1>
        <ul>
            ${lis} 
        </ul>
        ${time} 
    </body>
    `;

  res.send(output); // 클라이언트에 응답
});
app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
