var express = require("express");
var app = express();
var router = express.Router();
// const ejs = require("ejs");
// var path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");

const mysql = require("mysql"); // mysql 모듈
// post 전송을 위한 미들웨어

const connection = {
  // mysql 접속 설정
  host: "database-1.czudcyyavqk0.ap-northeast-2.rds.amazonaws.com", // IP
  port: "3306", // MariaDB PORT
  user: "root", // 사용자
  password: "11111111", // 비밀 번호
  database: "member", // Database 명
};

var conn = mysql.createConnection(connection);

conn.connect();
console.log("database 연결");

// 글 목록 보기 ------------------------------------------

router.get("/list/", function (req, res, next) {
  // var page = req.params.page;
  var sql =
    "select idx, name, title, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
    "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate from board";
  conn.query(sql, function (err, rows) {
    if (err) console.error("err : " + err);
    res.render("list.ejs", { title: "게시판", rows: rows });
  });
});

// 글 쓰기 ------------------------------------------

router.get("/write/", function (req, res, next) {
  res.render("write.ejs", { title: "게시판 글 쓰기" });
});

router.post("/write/", function (req, res, next) {
  var name = req.body.name;
  var title = req.body.title;
  var content = req.body.content;
  var passwd = req.body.passwd;
  var datas = [name, title, content, passwd];

  var sql =
    "insert into board(name, title, content, regdate, modidate, passwd,hit) values(?,?,?,now(),now(),?,0)";
  conn.query(sql, datas, function (err, rows) {
    if (err) console.error("err : " + err);
    res.redirect("/list/");
  });
});

// 글 내용 보기
router.get("/read/:idx/", function (req, res, next) {
  var idx = req.params.idx;
  var sql =
    "select idx, name, title, content, date_format(modidate,'%Y-%m-%d %H:%i:%s') modidate, " +
    "date_format(regdate,'%Y-%m-%d %H:%i:%s') regdate,hit from board where idx=?";
  conn.query(sql, [idx], function (err, row) {
    if (err) console.error(err);
    res.render("read.ejs", { title: "글 내용", row: row[0] });
  });
});

router.post("/update/", function (req, res, next) {
  var idx = req.body.idx;
  var name = req.body.name;
  var title = req.body.title;
  var content = req.body.content;
  var passwd = req.body.passwd;
  var datas = [name, title, content, idx, passwd];

  var sql =
    "update board set name=? , title=?,content=?, modidate=now() where idx=? and passwd=?";
  conn.query(sql, datas, function (err, result) {
    if (err) console.error(err);
    if (result.affectedRows == 0) {
      res.send(
        "<script>alert('패스워드가 일치하지 않습니다.');history.back();</script>"
      );
    } else {
      res.redirect("/list/");
    }
  });
});

// 글 삭제 ---------------------------------------

router.get("/delete/:idx", function (req, res) {
  var idx = req.params.idx;

  var sql = "SELECT * FROM board WHERE idx=?";
  conn.query(sql, [idx], function (err, member) {
    res.render("delete.ejs", { member: member[0] });
  });
});

router.post("/delete/:idx", function (req, res, next) {
  var idx = req.params.idx;
  var passwd = req.body.passwd;
  var datas = [idx, passwd];
  console.log(idx);
  console.log(passwd);
  var sql = "delete from board where idx=? and passwd=?";
  conn.query(sql, datas, function (err, result) {
    if (err) console.error(err);
    if (result.affectedRows == 0) {
      res.send(
        "<script>alert('패스워드가 일치하지 않습니다.');history.back();</script>"
      );
    } else {
      res.redirect("/list/");
    }
  });
});

module.exports = router;
