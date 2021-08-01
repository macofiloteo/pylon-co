var express = require('express');
var ping = require('./ping');
var router = express.Router();

router.get('/ping', ping);

module.exports = router;
