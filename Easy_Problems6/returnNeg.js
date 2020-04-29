function returnNeg(num) {
  /* using if/else
  if (String(num).startsWith('-')) {
    return num
  } else {
    return Number('-' + String(num))
  }
  */

  // Using ternary operator with Math.abs()
 return  String(num).startsWith('-') ?  num : Math.abs(num) * -1;

}

console.log(returnNeg(5));
console.log(returnNeg(-3));
console.log(returnNeg(0));