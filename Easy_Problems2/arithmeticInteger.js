const readline = require('readline-sync');

let add = (num1, num2) => num1 + num2;

let subtract = (num1, num2) => num1 - num2;

let multiply = (num1, num2) => num1 * num2;

let divide = (num1, num2) => num1 / num2;

let remainder = (num1, num2) => num1 % num2;

let power = (num1, num2) => Math.pow(num1, num2);

let num1 = Number(readline.question('Enter the first number:\n'));
let num2 = Number(readline.question('Enter the second number:\n'));

console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
console.log(`The remainder of ${num1} / ${num2} = ${remainder(num1, num2)}`);
console.log(`${num1} to the power of ${num2} = ${power(num1, num2)}`);

