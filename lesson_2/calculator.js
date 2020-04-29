// Ask the user for the first number
// Ask the user for the second number
// Ask the user for operator: addition, subtraction, multiplication, division
// Calculate the result
// Print result to the console

const readline = require('readline-sync');
const MESSAGE = require('./calculator_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function response() {
  prompt(MESSAGE['again']);
  let answer = readline.question().toLowerCase();
  if (answer[0].toLowerCase() === 'y') {
    calculate();
  }

}
function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt(MESSAGE['welcome']);
calculate();

function calculate() {
  prompt(MESSAGE['firstNum']);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGE['invalidNum']);
    number1 = readline.question();
  }
  prompt(MESSAGE['secondNum']);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGE['invalidNum']);
    number2 = readline.question();
  }

  prompt(MESSAGE['operation']);
  let operation = readline.question();

  while(!['1', '2', '3', '4'].includes(operation)) {
    prompt(MESSAGE['validOpp']);
    operation = readline.question()
  }
 
  let result;
  switch(operation) {
    case '1':
      result = Number(number1) + Number(number2);
    break;
    case '2':
      result = Number(number1) - Number(number2);
    break;
    case '3':
      result = Number(number1) * Number(number2);
    break;
    case '4':
      result = Number(number1) / Number(number2);
    break;
  }

  console.log(`The result is: ${result}`);
  response();
}

