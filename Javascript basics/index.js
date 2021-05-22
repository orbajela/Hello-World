

function multiplyNumbers(x,y){
    console.log(x*y)
}
multiplyNumbers(1,410.83)

const exchangeRate = 410.83

function convertDollarToNaira(dollarvalue){
    return multiplyNumbers(exchangeRate,dollarvalue)
}
console.log( convertDollarToNaira(5600))