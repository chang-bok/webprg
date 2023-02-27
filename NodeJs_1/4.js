const http = require("http"); // 웹서버 패키지

// http://127.0.0.1:3000
const hostname = "127.0.0.1"; // IP localhost
const port = 3000; // Port

// 웹 서버 생성 -> 콜백함수로 응답
var server = http.createServer(function (req, res) {
  // request, response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World One\n");
});

// IP와 Port를 열고 리스닝 -> 콜백함수로 응답
server.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});
