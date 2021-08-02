const {getSingleExchangeRate} = require('../../coins/repository');

function exchangeRate(from, to){
    const exchangeRate = await getSingleExchangeRate(from, to)
    let payload = 'You have an invalid input! Message format should be: \n!xrate {AMOUNT} {COIN} {CURRENCY}\nEx. "!xrate 1000 slp php"';
    
    if(exchangeRate){
        try{
            const totalRate = parseFloat(from) * exchangeRate;
            payload = `${from} ${to.toUpperCase()} = ${totalRate} ${to.toUpperCase()}`
        }
        catch{
            console.log('Invalid Input! Try Again!');
        }
    }

    return payload;
}

module.exports = exchangeRate