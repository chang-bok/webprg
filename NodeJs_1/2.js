const fs = require("fs");

var data = fs.readFileSync("./test.txt", { encoding: "utf8" }); // 동기 방식
console.log(data);
console.log(1);

var data = fs.readFileSync("./test.txt", { encoding: "utf8" }); // 동기 방식
console.log(data);
console.log(2);
