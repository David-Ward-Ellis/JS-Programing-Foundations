function isAllUpperCase (str) {
  let upperCaseRegex = /[A-Z]/
  let lowerCaseRegex = /[a-z]/

  return str.split('').filter(char => {
    if (char.match(upperCaseRegex) || char.match(lowerCaseRegex)) {
      return char;
    }
  }).every(char => char.match(upperCaseRegex))
     
}

console.log(isAllUpperCase('t'));
console.log(isAllUpperCase('T'));
console.log(isAllUpperCase('Four Score'));
console.log(isAllUpperCase('FOUR SCORE'));
console.log(isAllUpperCase('4SCORE!'));
console.log(isAllUpperCase(''));