/* Case sensitive and non-alphanumeric sensitive version
function isPalindrome(words) {
  let stringArray = [];

  for (let idx = 0; idx <= words.length; idx += 1) {
    stringArray.unshift(words[idx]);
  }
  let newString = stringArray.join("");
  return words === newString
}

*/

// Case insesitive and non-alphanumeric insensitive
const nonAlphaNumregex = /[^a-z0-9]/g

function isPalindrome(words) {
  let insenWords = words.toLowerCase().replace(nonAlphaNumregex, '');
  let stringArray = [];

  for (let idx = 0; idx <= words.length; idx += 1) {
    stringArray.unshift(insenWords[idx]);
  }
   
  return insenWords === stringArray.join("");
}

console.log(isPalindrome('madam'));
console.log(isPalindrome('Madam'));
console.log(isPalindrome("madam i'm adam"));
console.log(isPalindrome('356653'));
console.log(isPalindrome('356a653'));
console.log(isPalindrome('123ab321'));        