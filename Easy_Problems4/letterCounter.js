function letterCounter(str) {
  let letterCount = {};
  let strArray = str.toLowerCase().split(' ');

  if (str === '') return letterCount;

  for(let idx = 0; idx < strArray.length; idx += 1) {
    let newWord = removeNonLetter(strArray[idx]);
    strArray[idx] = newWord;
  }
 
  for (let idx = 0; idx < strArray.length; idx += 1) {
    letterCount[strArray[idx].length] = 0;
  }

  let keyArray = Object.keys(letterCount); 

  for (let idx = 0; idx < strArray.length; idx += 1) {
    if (keyArray.includes(String(strArray[idx].length))) {
      letterCount[strArray[idx].length] += 1;
    } 
  }
  return letterCount;
}

function removeNonLetter(word) {
  let result = '';

  for (let idx = 0; idx < word.length; idx += 1) {
    if (isLetter(word[idx])) {
      result = result + word[idx]
    }
  }
 return result
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

console.log(letterCounter('Four score and seven.'))
console.log(letterCounter('Hey diddle diddle, the cat and the fiddle!'));
console.log(letterCounter("What's up doc?"));
console.log(letterCounter(''));