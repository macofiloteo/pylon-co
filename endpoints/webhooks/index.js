var express = require('express');
var router = express.Router();
const generateVerifyToken = require('./generateVerifyToken');
const verifyToken = require('./verifyToken');
const parseFBMessage = require('./parseFBMessage');

router.get('/generateVerifyToken', generateVerifyToken);

router.route('/parseFBMessage')
    .get(verifyToken)
    .post(parseFBMessage)

module.exports = router;
