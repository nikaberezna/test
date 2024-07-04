// //1
// const quantity = prompt('введіть кількість товару')
// const price = prompt('введіть ціну товару')
// let discount = 0;
// if(quantity > 10 & quantity <= 20) {
//     discount = 0.1 // 10%
// }
// else if(quantity > 20) {
//     discount = 0.2 // 20%
// }
// const totalPrice = quantity * price;
// const disPrice = totalPrice * (1- discount)
// console.log(totalPrice, disPrice)

// //2
// const budget = prompt("введіть суму грошей у гаманці")
// const itemPrice = prompt("введіть ціну товару")
// const sum = Math.floor(budget / itemPrice)

// console.log(sum)
// //4
// const price1 = prompt("введіть ціну товару")
// const rate = prompt("введіть ціну податку у відсотках")

// const totalPrice1 = price1 * (1 = rate / 100)
// console.log(totalPrice1)

//5  Задача з обчисленням середньої швидкості: Користувач вводить відстань та час подорожі. Програма розраховує середню швидкість, яку потрібно розвивати, щоб подорожувати з заданою відстанню за заданий час.

// const distance = prompt('введіть відстань подорожі')
// const time = prompt('введіть час подорожі')

// const speed = Math.floor(distance / time)
// console.log('середню швидкість, яку потрібно розвивати ${speed}')

//6

const month = +prompt("напишіть номер місяця")
let days = 0
if(month>= 1 && month <= 12) {
    if(month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 12 || month === 10){
        days = 31
    }
    else if(month === 4 || month === 6 || month === 11){
        days = 30
    }
    else {
        days = 28
        console.log('якщо високосний рік тоді може бути 29')
    }
    console.log(days)
}