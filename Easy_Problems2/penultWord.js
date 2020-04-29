let penultWord = str => {
  let array = str.split(' ');
  return array[array.length -2]
}

console.log(penultWord('Launch School'));
console.log(penultWord('What light beyond yonder window breaks? It is Juliet, and she is the sun.'));