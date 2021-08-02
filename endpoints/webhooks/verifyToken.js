const {VerifyTokenCache} = require('../../cache')

function verifyToken(req, res){
      // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
    const verifyToken = VerifyTokenCache.get('verifyToken');

    console.log(verifyToken);
    if(!mode && !token && !verifyToken){
        res.sendStatus(400);
    }

    if(mode === 'subscribe' && token === verifyToken){
        console.log('[*] Token verified!');
        res.status(200).send(challenge);
    }
    else{
        res.sendStatus(403);
    }
}

module.exports = verifyToken;