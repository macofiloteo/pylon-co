const settings = require('../../settings');
const axios = require('axios');
const webhookCommands = require('./webhook-commands');

function parseFBMessage(req, res){
    const fbEvent = req.body;
    fbEvent.entry.forEach((entry)=>{
        entry.messaging.forEach(async (messaging)=>{
            
            if(!messaging.message || messaging.message.text.trim().length < 1 || messaging.message.text[0] !== '!'){
                return;
            }

            const message = messaging.message.text.split(' ');
            const sender = messaging.sender.id;
            const recipient = messaging.recipient.id;

            const payload = _parseCommand(message)

            if(!payload){
                return;
            }

            axios.post(`https://graph.facebook.com/v11.0/me/messages?access_token=${settings.PAGE_ACCESS_TOKEN}`,
                {
                    "messaging_type": "RESPONSE",
                    "recipient": {
                      "id": sender
                    },
                    "message": {
                      "text": payload
                    }
                }
            ).then((data)=>{
                console.log(`[*] Payload sent: ${payload}`);
            }).catch((err)=>{
                console.log(`[!] Payload not sent: ${payload}`);
                console.warn(err)
            });
        });
    });
    res.sendStatus(200);
}

function _parseCommand(message){
    const args = [...message];
    const command = args.unshift();

    if(!webhookCommands[command]){
        return undefined
    }
    return webhookCommands[command](...args)
}

module.exports = parseFBMessage;
