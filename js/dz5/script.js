// 1)Напишите программу, которая выводит все элементы массива:
// Создайте массив с несколькими элементами.
// Выведите каждый элемент массива на отдельной строке.



// 2)Напишите программу, которая находит сумму элементов массива:
// Создайте массив с числами.
// Просуммируйте все числа в массиве и выведите результат.

// 1)
let numbers = [6,9,5,0,4,2,8,11,];
numbers.forEach(element => {
    console.log(element)
})
// console.log(numbers)

// 2)
let array = [1,2,3,4,5,];
// console.log(array);
let sum = 0;
for(let i = 0; i <array.length; i++) {
    sum += array[i]
}
console.log(sum)