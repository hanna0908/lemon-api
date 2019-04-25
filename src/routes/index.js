var express = require('express');
var router = express.Router();
let { findBill, removeBill, addBill } = require("./index-api")
    //查找
router.get("/findBill", findBill)
    //删除
router.get("/removeBill", removeBill)
    //添加
router.post("/addBill", addBill)
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;