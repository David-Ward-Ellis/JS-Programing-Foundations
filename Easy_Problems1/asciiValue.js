/*
My solution before realising exactly what string.protoype.charCodeAt() can do

function getArray(str) {
  return str.split('');
}

function getCharCode(char) {
  return char.charCodeAt(0);
}

function calcASCIIValue(str) {
  let sum = 0;
  let array = getArray(str);
  array.forEach(char => {
    let asciiValue = getCharCode(char);
    sum += asciiValue;
  })

  return sum;
}

*/

function calcASCIIValue(str) {
  let sum = 0;

  for (idx = 0; idx < str.length; idx += 1) {
    sum += str.charCodeAt(idx);
  }
  return sum;
}

console.log(calcASCIIValue('Four score'));
console.log(calcASCIIValue('Launch School'));
console.log(calcASCIIValue('a'));
console.log(calcASCIIValue(''));