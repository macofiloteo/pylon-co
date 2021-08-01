var express = require('express')
var router = express.Router();
var utilsEndpoint = require('./utils')
var webhooksEndpoint = require('./webhooks')

router.use('/utils', utilsEndpoint);
router.use('/webhook', webhooksEndpoint);

module.exports = router;