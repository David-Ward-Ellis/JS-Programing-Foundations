function numIsPalindrome(num) {
  console.log(num)
  let str = String(num);
  console.log(str)

  return str === str.split('').reverse().join('');

}

// console.log(numIsPalindrome(123324))
// console.log(numIsPalindrome(45654))
// console.log(numIsPalindrome(45653));
// console.log(numIsPalindrome(123321));
// console.log(numIsPalindrome(5));
console.log(numIsPalindrome(01233210));
console.log(numIsPalindrome(0123321));