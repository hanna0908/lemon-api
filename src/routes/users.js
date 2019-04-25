var express = require('express');
var router = express.Router();
let { getUser } = require("./user-api")
router.get('/getUser', getUser);
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;