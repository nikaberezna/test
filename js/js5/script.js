// let array = [5,3,8,10,];
// // console.log(array);
// let sum = 0;
// for(let i = 0; i <array.length; i++) {
//     sum += array[i]
// }
// console.log(sum)

// let numbers = [5,3,8,1,10,1000,0,5000,];
// let min = numbers[0];
// // console.log(min)
// let max = numbers[0];
// for(let i = 0; i< numbers.length; i++) {
//     if(numbers[i] < min) min = numbers[i];
//     if(numbers[i] > max) max = numbers[i];
// };
// console.log(min)
// console.log(max)

let array = [5,3,8,1,10,1000,0,5000,];
// let min = array[6];
// let max = array[7];
// for(let i = 0; i< array.length; i++) {
//         if(array[i] === min) {
//             array[i] = max
//         }
//         else if(array[i] === min) {
//             array[i] = min;
//         }
//     }
// console.log(array)
let min = Math.min(...array);
let max = Math.max(...array);
let minIndex = array.indexOf(min)
let maxIndex = array.indexOf(max)
array[minIndex] = max
array[maxIndex] = min

console.log(array)
