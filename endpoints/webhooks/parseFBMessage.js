const settings = require('../../settings');
const axios = require('axios');
const getSingleExchangeRate = require('../coins/getSingleExchangeRate');

function parseFBMessage(req, res){
    const fbEvent = req.body;
    fbEvent.entry.forEach((entry)=>{
        entry.messaging.forEach(async (messaging)=>{
            
            if(!messaging.message){
                return;
            }

            const message = messaging.message.text.split(' ');

            if(message.length !== 3){
                return;
            }

            const sender = messaging.sender.id;
            const recipient = messaging.recipient.id;

            const exchangeRate = await getSingleExchangeRate(message[1], message[2])
            let payload = 'You have an invalid input!';
            
            if(exchangeRate){
                try{
                    const totalRate = parseFloat(message[0]) * exchangeRate;
                    payload = `${message[0]} ${message[1].toUpperCase()} = ${totalRate} ${message[2].toUpperCase()}`
                }
                catch{
                    console.log('Invalid Input! Try Again!');
                }
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
                console.log(data);
            }).catch((err)=>{
                console.log(err)
            });
        });
    });
    res.sendStatus(200);
}

module.exports = parseFBMessage;
