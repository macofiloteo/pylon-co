const {v4 : uuid} = require('uuid')
const {VerifyTokenCache} = require('../../cache')

function generateVerifyToken(req, res){
    const generatedToken = uuid();
    VerifyTokenCache.set('verifyToken', generatedToken);
    res.send(generatedToken);
}

module.exports = generateVerifyToken;