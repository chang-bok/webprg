const express = require("express");
const app = express();
const port = 3000;

// 정적 파일이 있는 디렉토리
app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
