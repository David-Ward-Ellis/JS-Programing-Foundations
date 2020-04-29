function countOccurences(str) {
let occurenceCount = {};
let charArray = str.split('');

charArray.forEach(char => {
  occurenceCount[char] = occurenceCount[char] || 0;
  occurenceCount[char] += 1;
}) 

emptyStringCheck(occurenceCount);

return occurenceCount;
}

function emptyStringCheck(obj) {
  for (let checker in obj) {
    if (checker = ' ') {
      delete obj[checker]
    }
  }
  return obj
}

console.log(countOccurences('The Flintstones Rock'));