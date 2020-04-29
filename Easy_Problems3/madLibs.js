const readline = require('readline-sync');
let answerArray = [];

function getUserInput() {
  let noun = readline.question('Please enter a noun\n');
  answerArray.push(noun);
  let adjective = readline.question('Please enter an adjective\n');
  answerArray.push(adjective);
  let adverb = readline.question('Please enter an adverb\n');
  answerArray.push(adverb);
  let verb = readline.question('Please enter a verb\n');
  answerArray.push(verb);
  return answerArray;
}

getUserInput()

console.log (`The ${answerArray[1]} ${answerArray[0]} ${answerArray[2]} ${answerArray[3]}`)