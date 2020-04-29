const readline = require('readline-sync');

function prompt(message) {
  console.log (`=> ${message}`);
}

prompt('What is the total bill?')
let total = Number(readline.question());

prompt('What is the tip percentage?')
let tipPer = Number(readline.question()) / 100;

let tip = tipPer * total;
let newTotal = total + tip;

console.log(`The tip is $${tip.toFixed(2)}`); 
console.log(`The total bill is $${newTotal.toFixed(2)}`);