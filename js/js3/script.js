const btn = document.querySelector('.btn'),
      answer = document.querySelector('.answer'),
      inputOne = documen= +prompt(`введіть друге число`);
//     let number1 = num1
//     let number2 = num2
//     let result = number1 + number2
//     btn.addEventListener('click', function() {
//         textt.querySelector('.input-one'),
      inputTwo = document.querySelector('.input-two');
// console.log(btn, answer, text)
// function calculate() {
//     let num1 = +prompt(`введіть перше число`);
//     let num2 .textContent = `${number1} + ${number2} = ${result}`
//         answer.textContent = `Answer - ${result}`
//     })
// }
// calculate()
function calculate() {
    btn.addEventListener('click', function(){
            let number1 = Number(inputOne.value)
            let number2 = Number(inputTwo.value)
            let plus = number1 + number2
            let minus =  number1- number2
            let congr = number1 * number2
            let dil = number1 / number2
            answer.innerHTML = 'додавання: '+plus+'<br>'+'віднімання: '+minus+'<br>'+'множення: '+congr+'<br>'+'ділення: '+dil+'<br>'
        })
    
}
calculate()
