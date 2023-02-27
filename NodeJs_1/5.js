const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  // 라우터(Router)
  res.send("어서오세요<BR> 오늘도 좋은 하루!");
});

app.get("/login", (req, res) => {
  // (req)과 응답(res) 객체 전달
  res.send("로그인 페이지입니다.");
});

app.listen(port, function () {
  // localhost:3000
  console.log(`Example app listening at http://localhost:${port}`);
});
