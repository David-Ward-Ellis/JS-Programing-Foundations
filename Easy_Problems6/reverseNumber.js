function reverseNumber(num) {
  let numArray = [];
  let strNum = String(num);

  for (let idx = 0; idx < strNum.length; idx += 1) {
    numArray.unshift(strNum[idx]);
  }
  
  return Number(numArray.join(''));
}

console.log(reverseNumber(123456));
console.log(reverseNumber(456));
console.log(reverseNumber(1));
console.log(reverseNumber(1200));