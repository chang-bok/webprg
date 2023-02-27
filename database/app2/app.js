var express = require("express");
var app = express();
var mysql = require("mysql");
// post 전송을 위한 미들웨어
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.locals.pretty = true;
app.set("view engine", "jade");
app.set("views", "./views");

const connection = {
  host: "database-1.czudcyyavqk0.ap-northeast-2.rds.amazonaws.com", // IP
  port: "3306", // MariaDB PORT
  user: "root", // 사용자
  password: "11111111", // 비밀 번호
  database: "cloud", // Database 명
};
var conn = mysql.createConnection(connection);
conn.connect(); // DB 연결
console.log("데이터베이스 연결");
app.listen(3001, function () {
  console.log("Connected, 3001 port!");
});

// index(get) : 시작 웹 페이지
app.get("/", function (req, res) {
  // test 테이블의 id, title 선택
  sql = "SELECT id, title FROM test";

  conn.query(sql, function (err, topics, fields) {
    console.log(topics);
    res.render("index", { topics: topics });
  });
});

// add(get) : 글 추가하기 폼
app.get("/add", function (req, res) {
  res.render("add");
});

// add(post) : 글 추가하기
app.post("/add", function (req, res) {
  // 폼에서 post 방식으로 전송된 파라메터
  var title = req.body.title; // 제목
  var description = req.body.description; // 내용
  var author = req.body.author; // 작성지

  var sql = "INSERT INTO test (title, description, author) VALUES(?, ?, ?)";
  // 쿼리 실행 후 topic에는 삽입된 객체가 저장
  conn.query(sql, [title, description, author], function (err, topics, fields) {
    // topics.insertId : INSERT 문이 실행됐을 때, 삽입된 데이터의 id를 얻는 방법
    console.log("삽입된 데이터의 id : ", topics.insertId);
    res.redirect("/" + topics.insertId); // 경로 자동 이동
  });
});

app.get("/:id", function (req, res) {
  var id = req.params.id;

  sql = "SELECT id, title FROM test"; // 모든 레코드
  conn.query(sql, function (err, topics, fields) {
    var sql = "SELECT * FROM test WHERE id=?"; // 특정 레코드
    conn.query(sql, [id], function (err, topic, fields) {
      if (err) console.log(err);
      res.render("new_id", { topics: topics, topic: topic[0] });
    });
  });
});

// edit(get) : 글 수정하기 폼
app.get("/edit/:id", function (req, res) {
  var id = req.params.id;
  var sql = "SELECT id, title FROM test";

  // topics에 모든 글 목록 저장
  conn.query(sql, function (err, topics, fields) {
    var sql = "SELECT * FROM test WHERE id=?";

    // topic에 id 값에 해당하는 레코드 저장
    conn.query(sql, [id], function (err, topic, fields) {
      res.render("edit", { topics: topics, topic: topic[0] });
    });
  });
});

// 글 수정
app.post(["/edit/:id"], function (req, res) {
  var title = req.body.title;
  var description = req.body.description;
  var author = req.body.author;
  var id = req.params.id;
  var sql = "UPDATE test SET title=?, description=?, author=? WHERE id=?";
  conn.query(
    sql,
    [title, description, author, id],
    function (err, result, fields) {
      res.redirect("/" + id);
    }
  );
});

// 글 삭제 폼
app.get("/delete/:id", function (req, res) {
  var sql = "SELECT id,title FROM test";
  var id = req.params.id;
  conn.query(sql, function (err, topics, fields) {
    var sql = "SELECT * FROM test WHERE id=?";
    conn.query(sql, [id], function (err, topic) {
      if (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }
      res.render("delete", { topics: topics, topic: topic[0] });
    });
  });
});

// 글 삭제
// delete(post) : 글 삭제
app.post("/delete/:id", function (req, res) {
  var id = req.params.id;
  var sql = "DELETE FROM test WHERE id=?";
  conn.query(sql, [id], function (err, result) {
    res.redirect("/");
  });
});
