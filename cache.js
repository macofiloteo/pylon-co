const NodeCache = require('node-cache')
const verifyTokenCache = new NodeCache({checkperiod: 60, deleteOnExpire: true, stdTTL: 60*5});
const coinsMapCache = new NodeCache({deleteOnExpire: false})

module.exports = {
    VerifyTokenCache: verifyTokenCache,
    CoinsMapCache: coinsMapCache
}