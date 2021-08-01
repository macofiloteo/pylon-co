var express = require('express')
var router = express.Router();
var utilsEndpoint = require('./utils')
var webhooksEndpoint = require('./webhooks')
const coinsEndpoint = require('./coins');

router.use('/utils', utilsEndpoint);
router.use('/webhook', webhooksEndpoint);
router.use('/coins', coinsEndpoint);
module.exports = router;