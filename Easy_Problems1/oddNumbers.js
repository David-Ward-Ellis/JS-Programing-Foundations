// let num;

// for (num = 1; num <= 99; num +=1) {
//   if (num % 2 === 1) {
//     console.log (num)
//   } 
// }

const readline = require('readline-sync');

let a = readline.question('Do you want to find out the odd numbers between two numbers?\n');

if (a.toLowerCase() === 'yes') {
  let num1 = Number(readline.question('Pick a positive integer\n'));
  let num2 = Number(readline.question('Pick a second positive integer greater than the first\n'));
  while (num1 < num2) {
  num1 % 2 === 1 ? console.log (num1) : false
  num1 += 1;
  }
} else { 
  console.log('Oh, boo!')
}

