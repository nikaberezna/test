// const btn = document.querySelector('.btn');
// let str = ' '
// let mass = [1,2,3,4,5,88,34,21,13,57,67,68];
// btn.addEventListener('click', () => {
//     for(let i = 0; i< mass.length; i++) {
//         if(mass[i] % 2 === 0) {
//             str += mass[i]
//             str += '<br>'
//             let div3 = document.querySelector('.div3').innerHTML = str
//         }
//     }
// })
// const btn = document.querySelector('.btn');
// let str = ''
// let mass = [1,2,3,4,5,88,34,21,13,57,67,68];
// btn.addEventListener('click', () => {
//     for(let i = 0; i< mass.length; i++) {
//         if(mass[i] % 2 != 0) {
//             str += mass[i]
//             str += '<br>'
//             let div3 = document.querySelector('.div3').innerHTML = str
//         }
//     }
// })
// let mass =[2,3,5,6,9]
// let first = mass[0] * mass[1];
// let second = mass[2] * mass[3];
// let result = first + second
// console.log(result)
// let mass =[2,3,5,6,9]
// let result = mass.reduce((sum, current)=> sum + current, 0)
// console.log(result)
// result = 0
// for(let i = 0; i< mass.length; i++) {
//     result += mass[i]
// }
// console.log(result)

//Серед елементів масиву цілих чисел знайти мінімальний елемент. Результат запишіть в змінну result3. Виведіть на екран значення цієї змінної.
let mass =[5,3,9,1,4,8];
let result3 = Math.min(...mass);
console.log(result3)