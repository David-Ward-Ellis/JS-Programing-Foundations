const readline = require('readline-sync');
const numberCollection = [];

function collectInput() {
  let num1 = Number(readline.question('Enter the first number:\n'));
  numberCollection.push(num1);
  let num2 = Number(readline.question('Enter the second number:\n'));
  numberCollection.push(num2);
  let num3 = Number(readline.question('Enter the third number:\n'));
  numberCollection.push(num3);
  let num4 = Number(readline.question('Enter the fourth number:\n'));
  numberCollection.push(num4);
  let num5 = Number(readline.question('Enter the fifth number:\n'));
  numberCollection.push(num5);
  let num6 = Number(readline.question('Enter the sixth number:\n'));
  numberCollection.push(num6);
}

function searchInput(numArray) {
  for (let idx = 0; idx < numArray.length - 1; idx += 1) {
    if (numArray[idx] === numArray[5]) {
      let str = String(numArray);
      return `The number ${numArray[5]} appears in ${str.slice(0, str.length - 2)}.`
    }
  }
    str = String(numArray);
  return`The number ${numArray[5]} does not appear in ${str.slice(0, str.length - 2)}.`
}

collectInput();

console.log(searchInput(numberCollection));