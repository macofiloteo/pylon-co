const {v4 : uuid} = require('uuid')
const NodeCache = require('../../cache')

function generateVerifyToken(req, res){
    const generatedToken = uuid();
    NodeCache.set('verifyToken', generatedToken);
    res.send(generatedToken);
}

module.exports = generateVerifyToken;