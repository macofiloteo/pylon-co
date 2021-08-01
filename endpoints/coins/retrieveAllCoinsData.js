const axios = require('axios');
const NodeCache = require('../../cache');
const COIN_GECKO_EXCHANGE_LIST_URL = 'https://api.coingecko.com/api/v3/coins/list'

async function retrieveAllCointsData(req, res){
    const coins = (await axios.get(COIN_GECKO_EXCHANGE_LIST_URL)).data;
    const coinsMap = {}
    coins.forEach((coin)=>{
        coinsMap[coin.symbol] = coin.id
    });
    NodeCache.set('coinsMap', coinsMap);
    res.send(coinsMap);
}

module.exports = retrieveAllCointsData;