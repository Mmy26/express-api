var express = require("express");
var router = express.Router();
var cors = require("cors");

router.get("/", function (req, res, next) {
  var param = { 値: "これはサンプルAPIです" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

router.get("/hello", cors(), function (req, res, next) {
  var param = { 値: "Hello World!" };
  res.header("Content-Type", "application/json; charset=utf-8");
  res.send(param);
});

module.exports = router;
