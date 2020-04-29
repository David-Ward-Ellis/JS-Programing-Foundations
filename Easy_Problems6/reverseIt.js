function reverseString (str) {
let reverseString = str.split(' ').reverse().join(' ');

console.log(reverseString);
}

function reverseWords (str) {
  str = str.split(' ');

 let reversedWords = str.map(word => {
    if (word.length <= 4) {
      return word;
    } else {
      return word.split('').reverse().join('');
    } 
  })
  console.log(reversedWords.join(' '));

}

// reverseString('');
// reverseString('Hello World');
// reverseString('Reverse these words');

reverseWords('Professional');
reverseWords('Walk around the block');
reverseWords('Launch School');
