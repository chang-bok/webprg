const mysql = require("mysql"); // mysql 모듈

const connection = {
  // mysql 접속 설정
  host: "database-1.czudcyyavqk0.ap-northeast-2.rds.amazonaws.com", // IP
  port: "3306", // MariaDB PORT
  user: "root", // 사용자
  password: "11111111", // 비밀 번호
  database: "cloud", // Database 명
};

var conn = mysql.createConnection(connection);

conn.connect();
console.log("database 연결");
//conn.end();
//console.log("database 종료");

/////////////////////////////////////////////////////////////////////////////
// var sql = "INSERT INTO test (title, description, author) VALUES(?, ?, ?)";
// var params = ["Supervisor", "Supervisor is Watcher", "lss"];
// conn.query(sql, params, function (err, rows, fields) {
//   if (err) console.log(err);
//   else console.log(rows.insertId);
// });

/////////////////////////////////////////////////////////////////////////////

// var sql = "INSERT INTO test (title, description, author) VALUES(?, ?, ?)";
// var params = ["Supervisor", "Supervisor is Watcher", "lss"];
// conn.query(sql, params, function (err, rows, fields) {
//   if (err) console.log(err);
//   else console.log(rows.insertId);
// });

////////////////////////////////////////////////////////////

// var sql = "UPDATE test SET title=?, author=? WHERE id=?";
// var params = ["NPM", "leezche", 30];
// conn.query(sql, params, function (err, rows, fields) {
//   if (err) console.log(err);
//   else console.log(rows);
// });

////////////////////////////////////////////////////////////

// var sql = "DELETE FROM test WHERE id=?";
// var params = [30];
// conn.query(sql, params, function (err, rows, fields) {
//   if (err) console.log(err);
//   else console.log("삭제되었습니다");
// });

////////////////////////////////////////////////////////////

var sql = "SELECT * FROM test"; // 출력 쿼리

conn.query(sql, function (err, rows, fields) {
  // 쿼리 실행
  if (err) console.log(err);
  else {
    for (var i = 0; i < rows.length; i++) {
      console.log("ID : " + rows[i].id);
      console.log("title : " + rows[i].title);
      console.log("description : " + rows[i].description);
      console.log("author : " + rows[i].author);
      console.log("========================");
    }
  }
});
