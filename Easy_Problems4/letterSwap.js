/* Version withot using map
function swap(str) {
  let arrayOfWords = str.split(' ');
  for (let idx = 0; idx < arrayOfWords.length; idx += 1) {
    arrayOfWords[idx] = switchFirstAndLast(arrayOfWords[idx])
  }
  return arrayOfWords.join(' ');
}

function switchFirstAndLast(word){
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

*/

// Version using map

function swap(str) {
  let arrayOfWords = str. split(' ');

  let newArray = arrayOfWords.map(word => {
    if (word.length === 1) return word

   return word = word.slice(-1) + word.slice(1, -1) + word[0]
   
  })
  return newArray.join(' ')
}
console.log(swap('The first test'));
console.log(swap('How do you do'))
console.log(swap('hello there'));
console.log(swap('a'));