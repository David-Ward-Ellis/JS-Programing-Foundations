const readline = require('readline-sync');
let array = [];

function sumOrProduct () {
  console.log("Would you like to add or multiply your set of numbers?1) Add 2)Multiply")
  let answer = readline.question();

  if (answer === '1') {
    console.log(getSum(array));
  } else if (answer === '2') {
    console.log(getProduct(array));
  } else {
    console.log('You did not pick 1 or 2')
    sumOrProduct(array);
  }
}

function getSum(numArray) {
  let sum = numArray.reduce(function (accumulator, currentvalue) {
    return accumulator + currentvalue
  }, 0)
  return sum
}

function getProduct(numArray) {
  let product = numArray.reduce(function (accumulator, currentvalue) {
    return accumulator * currentvalue
  }, 1)
  return product
}


function getArray(number) {s
  array.push(number);
  return array;
}

console.log('Please enter a number')
let num = readline.question();

while (num !== 'done') {
  array = getArray((Number(num)));
  console.log(array);
  console.log("Please type 'done' or enter another number")
  num = readline.question();
}

sumOrProduct(array);






// let counter = 1;
// let result;

// function isValid(entry) {
//   if (entry === 's' || entry === 'p') {
//     return false;
//   } else return true;
// }

// console.log('Enter an integer greater than zero');
// let integer = Number(readline.question());

// console.log('Enter "s" to compute the sum, "p" to compute the product of the numbers from 1 to your selected integer');
// let operation = readline.question();




// while (isValid(operation)) {
//   console.log("Please enter 's'(for sum) or 'p'(for product)");
//   operation = readline.question();
// }

// switch (operation.toLowerCase()) {
//   case 's':
//     for (result = 0; counter <= integer; counter +=1) {
//       result =  result + counter; 
//     }
//     console.log(result);
//   break;
//   case 'p':
//     for (result = 1; counter <= integer; counter +=1) {
//     result = result * counter;
//     }
//     console.log(result);
//     break;
//   default:
//     console.log('Oops, unknown operation.')
//   }
