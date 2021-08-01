const NodeCache = require('node-cache')
const nodeCache = new NodeCache({checkperiod: 60, deleteOnExpire: true, stdTTL: 60*5});

module.exports = nodeCache