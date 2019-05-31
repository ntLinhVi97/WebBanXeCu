var express = require('express');
var router = express.Router();
var uuid = require('uuid/v1')
var nhanvienCollection = require('../schema/nhanvien')
var nguoibanCollection = require('../schema/nguoiban')
var taikhoanCollection = require('../schema/taikhoan')
/* GET users listing. */
router.get('/', function (req, res, next) {
  var data = {
    id: uuid(),
    hoten: "vailon",
    bophan: "tiepdon"
  }
  console.log(req.body.hoten);

  nhanvienCollection.create(data, function (err, nhanvien) {
    if (err) {
      return console.log("error on saving doc")
    } else {
      res.send(nhanvien.id)
    }
  });
});

module.exports = router;