let numbers = [1, 2, 3, 4, 5];

/* Version 1

numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

console.log(numbers);

*/

/* Version 2
function removeElements (numArray) {
  for (let idx = 0; idx < numArray.length; idx += 1) {
  numArray.splice(idx);
  }
  return numArray;
}

removeElements(numbers);

console.log(numbers);

*/

// Version 3
numbers.splice(0);
console.log(numbers);