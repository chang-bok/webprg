var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// 코드 추가
router.get("/documents", function (req, res, next) {
  res.render("index", { title: "Backend Programming" });
});

module.exports = router;
