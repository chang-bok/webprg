const fs = require("fs");
// 비동기 방식(함수 실행 -> 콜백 함수에 실행을 맡기고 다음으로 실행 옮김)
var data = fs.readFile(
  "./test.txt",
  { encoding: "utf8" },
  function (err, data) {
    // 콜백함수
    console.log(1);
    console.log(data);
  }
);

// 비동기 방식(함수 실행 -> 콜백 함수에 실행을 맡기고 다음으로 실행 옮김)
var data = fs.readFile(
  "./test.txt",
  { encoding: "utf8" },
  function (err, data) {
    // 콜백함수
    console.log(2);
    console.log(data);
  }
);

console.log(3);
