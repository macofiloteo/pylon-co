const axios = require('axios');
const {CoinsMapCache} = require('../../../cache');

async function getSingleExchangeRate(fromCurrency, toCurrency){
    const coinsMap = CoinsMapCache.get('coinsMap');
    const coin = coinsMap[fromCurrency.toLowerCase()];
    if(!coin){
        return undefined
    }
    const coinExchangeUrl = `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&community_data=false&developer_data=false`
    const geckoRes = await axios.get(coinExchangeUrl);
    return geckoRes.data.market_data.current_price[toCurrency.toLowerCase()]
}

module.exports = getSingleExchangeRate