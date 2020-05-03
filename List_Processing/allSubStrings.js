function allSubStrings(str) {
  let arrayOfSubstrings = []
  
  for (idx = 0; idx < str.length; idx += 1) {
    arrayOfSubstrings = arrayOfSubstrings.concat(leadingSubString(str.substring(idx)))
  }

  return arrayOfSubstrings
}

function leadingSubString(str) {
 let result = '';  
 return str.split('').map(char => {
  return result += char
 });
}

console.log(allSubStrings('abcde'));