async function getExchangeRate(currencyCode) {
    try {
    const respond = await fetch('https://api.exchangerate.host/latest')
    const data = await respond.json()
    
    const exchangeRate = data[currencyCode];

    if(exchangeRate !== undefined){
        //fixing the float value to just 4
        return parseFloat(exchangeRate).toFixed(4)
    } else {
        return null
    }
  }
    catch(err) {
        //to handle the error while fetching the api if any
        return `Error: ${err.message}`
  }
}

getExchangeRate('USD')
    .then((price)=> {
        console.log(price);
    }) 
    .catch((err) => {
        console.error(err);
    })

