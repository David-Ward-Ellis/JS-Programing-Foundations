const readline = require('readline-sync');
let today = new Date();
let year = today.getFullYear();

let currentAge = Number(readline.question('What is your age?\n'));
let retireAge = Number(readline.question('At what age would you like to retire?\n'));

console.log(`It's ${year}. You will retire in ${year + (retireAge - currentAge)}`);
console.log(`You only have ${retireAge - currentAge} years to work!`);