const {getSingleExchangeRate} = require('../../coins/repository');

async function exchangeRate(amount, from, to){
    const exchangeRate = await getSingleExchangeRate(from, to)
    let payload = 'You have an invalid input! Message format should be: \n!xrate {AMOUNT} {COIN} {CURRENCY}\nEx. "!xrate 1000 slp php"';
    
    if(exchangeRate){
        try{
            const totalRate = parseFloat(amount) * exchangeRate;
            payload = `${amount} ${from.toUpperCase()} = ${totalRate} ${to.toUpperCase()}`
        }
        catch{
            console.log('Invalid Input! Try Again!');
        }
    }

    return payload;
}

module.exports = exchangeRate