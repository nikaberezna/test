///1 
let sum = +prompt('введіть суму покупки')

if(sum >= 200 && sum <= 300){
    number1 = 3;
    let sum1 = sum * (1 - number1 /100)
}
else if(sum >= 300 && sum <= 500){
    number1 = 5;
    let sum1 = sum * (1 - number1 /100)
}
else if(sum >= 500 && sum <= 700){
    number1 = 7;
    let sum1 = sum * (1 - number1 /100)
}
console.log(`сума до оплати зі знижкою ${sum1}`)
//2
let wallet = +prompt('введіть суму грошей у гаманці')
let chocolate = +prompt('введіть ціну однієї шоколадки')

let numchocolates = wallet - chocolate
let change = wallet % chocolate
console.log(`ви можете купити ${numchocolates} шоколадок`)
console.log(`у вас залишиться ${change} грошей`)
//3
let distance = +prompt('введіть відстань у км між двома містами')
let time = +prompt('введіть за скільки годин ви хочете доїхати')

let speed = distance / time 
console.log(`вам потрібно рухатися зі швидкістю ${speed} км/год`)