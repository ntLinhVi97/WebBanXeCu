var mongoose = require('../db');
var schema = new mongoose.Schema({
    id: String,
    hoten: String,
    cmnd: String,
    diachi: String,
    sdt: String,
    email: String,
    yeucau: String
});

var nguoimua = mongoose.model('nguoimua', schema);
module.exports = nguoimua;