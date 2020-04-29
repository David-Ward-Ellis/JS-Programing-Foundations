function listDigits(number) {
  if (number === undefined) {
    return number = []
  }
  
  let numArray = String(number).split('').map(num => parseInt(num, 10));

  return numArray;
}

console.log(listDigits(12345));
console.log(listDigits(478));
console.log(listDigits(5));
console.log(listDigits());