const readline = require('readline-sync');
const CONVERSION = 10.7639;

function prompt(message) {
  console.log (`=> ${message}`);
}

prompt('Are you measuring in meters or feet?');
let measureStandard = readline.question();
measure(measureStandard);

function measure() {
  if (measureStandard[0].toLocaleLowerCase() === 'm') {
    prompt('Enter the length of the room')
    let length = Number(readline.question());

    prompt('Enter the width of the room');
    let width = Number(readline.question());

    let squareMeters = (length * width).toFixed(2);
    let squareFeet = (squareMeters * CONVERSION).toFixed(2);
    console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`)
  
  } else if (measureStandard[0].toLocaleLowerCase() === 'f') {
    prompt('Enter the length of the room')
    let length = Number(readline.question());

    prompt('Enter the width of the room');
    let width = Number(readline.question());

    let squareFeet = (length * width).toFixed(2);
    let squareMeters = (squareFeet / CONVERSION).toFixed(2);
    console.log(`The area of the room is ${squareFeet} square feet (${squareMeters} square meters).`)
  } else {
    prompt('You did not enter a valid standard of measurment: please enter meters or feet')
    measureStandard = readline.question();
    measure()
  }
}

