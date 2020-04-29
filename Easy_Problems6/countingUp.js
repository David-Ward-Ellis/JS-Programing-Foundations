function sequence(num) {
  let sequenceArray = [];

  for(let counter = 1; counter <= num; counter += 1) {
    sequenceArray.push(counter);
  }

  return sequenceArray;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
