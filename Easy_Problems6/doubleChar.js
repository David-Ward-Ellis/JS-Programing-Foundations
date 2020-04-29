const consRegex = /[bcdfghjklmnpqrstvwxyz]/i
function doubleChar (str) {
  let result = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx].match(consRegex)) {
    result = result + str[idx] + str[idx]
    } else result = result + str[idx] 
  }

   return result
}

console.log(doubleChar('Good job!'));
console.log(doubleChar('Hello-World'));
console.log(doubleChar(''));
console.log(doubleChar('July, 4th 2020'));