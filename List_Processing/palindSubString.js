function palindromes(origStr) {
  let arrayOfSubstrings = []
  
  for (idx = 0; idx < origStr.length; idx += 1) {
    arrayOfSubstrings = arrayOfSubstrings.concat(getSubStrings(origStr.substring(idx)))
  }

  return arrayOfSubstrings.filter(arrStr => {
    return checkPalindrome(arrStr)
  })
}

function getSubStrings(copyStr) {
 let result = '';  
 return copyStr.split('').map(char => {
  return result += char
  }); 
}

function checkPalindrome(checkStr) {
  return checkStr.length > 1 && checkStr === checkStr.split('').reverse().join('')
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));