const readline = require('readline-sync');

let name = readline.question('What is your name?\n');

if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log(`HELLO, ${name.toLocaleUpperCase()}! WHY ARE WE SCREAING!?`)
} else console.log(`Hello, ${name}`)