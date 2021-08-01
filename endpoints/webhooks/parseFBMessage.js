const settings = require('../../settings');
const axios = require('axios');
function parseFBMessage(req, res){
    console.log(req.body);
    const fbEvent = req.body;
    fbEvent.entry.forEach((entry)=>{
        entry.messaging.forEach((messaging)=>{
            if(messaging.message){
                const sender = messaging.sender.id;
                const recipient = messaging.recipient.id;
                axios.post(`https://graph.facebook.com/v11.0/me/messages?access_token=${settings.PAGE_ACCESS_TOKEN}`,
                    {
                        "messaging_type": "RESPONSE",
                        "recipient": {
                          "id": sender
                        },
                        "message": {
                          "text": "hello, world!"
                        }
                    }
                ).then((data)=>{
                    console.log(data);
                })
            }
        });
    });
    res.sendStatus(200);
}

module.exports = parseFBMessage;
