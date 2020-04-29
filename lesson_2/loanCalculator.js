const readline = require('readline-sync');
const MESSAGE = require('./loanCalculator.json');

function prompt(message) {
  console.log (`=> ${message}`);
}

function isValidNumber(num) {
  return num.trim() === '' ||
         Number(num) <= 0 ||
         Number.isNaN(Number(num));
}

function fetchInput() {
  prompt(MESSAGE['loan']);
  loanAmount = (readline.question());
  while (isValidNumber(loanAmount)) {
    prompt(MESSAGE['validEntry']);
    loanAmount = readline.question();
  }

  prompt(MESSAGE['APR']);
  annualInterest = readline.question();
  while (isValidNumber(annualInterest)) {
    prompt(MESSAGE['validEntry']);
    annualInterest = readline.question();
  }

  prompt(MESSAGE['duration']);
  duration = readline.question()
  while (isValidNumber(duration)) {
    prompt(MESSAGE['validEntry']);
    duration = readline.question();
  }
}

function monthlyPayment(loan, apr, duration) {
  let percentage = Number(apr) / 100;
  let monthlyInterest = percentage / 12;
  let monthlyPayment = Number(loan) *
                  (monthlyInterest /
                  (1 - Math.pow((1 + monthlyInterest), (-duration))));
  return monthlyPayment.toFixed(2);
}

const isValidAnswer = answer => {
  answer = answer.toLowerCase();
  return answer !== 'yes' && answer !== 'no';
}

const retrieveNewCalculation = () => {
  prompt(MESSAGE['again']);
  let answer = readline.question().toLocaleLowerCase();
  while (isValidAnswer(answer)) {
    prompt(MESSAGE['validAnswer']);
    answer = readline.question().toLocaleLowerCase();
  }
  return answer;
}

const isNewCalculation = answer => {
  return answer === 'no';
}

prompt(MESSAGE['welcome']);

while (true) {
  prompt('--------------------');

  fetchInput();
  
  let months = Number.parseInt(duration) * 12;

  let payments = monthlyPayment(loanAmount, annualInterest, months);
  console.log(`You will owe $${payments} a month for ${months} months`);
  
  let answer = retrieveNewCalculation();
  
  if (isNewCalculation(answer)) break;

  console.clear();
}

