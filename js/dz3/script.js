// "Напишіть функцію, яка приймає одне ціле число на вході та повертає повідомлення про те, чи є це число простим або ні. Простим вважається число, яке ділиться лише на себе та на 1."
function calculate() {
    let num = +prompt(`введіть число`);
        if(num <= 1){
            console.log(`${num} не є простим числом`)
        }
        // for (let i = 2; i <= Math.sqrt(num); i++) {
        //     if (num % i === 0) {
        //       console.log(`${num} не є простим числом`);             
        //     return;
        //     }
        //   }
          console.log(`${num} є простим числом`);
        }
calculate();