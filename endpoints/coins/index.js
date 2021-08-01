var express = require('express');
var router = express.Router();
const retrieveAllCointsData = require('./retrieveAllCoinsData');
const getSingleExchangeRate = require('./getSingleExchangeRate');

router.get('/retrieve-all', retrieveAllCointsData);
router.get('/get-exchange-rate/:coinsId/:currencyId', async function(req,res){
    const geckoRes = await getSingleExchangeRate(req.params.coinsId, req.params.currencyId)
    res.send({from: req.params.coinsId.toUpperCase(), to: req.params.currencyId.toUpperCase(), value: geckoRes})
})
module.exports = router;
