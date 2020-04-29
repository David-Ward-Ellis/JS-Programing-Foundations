const nonAlphaRegEx = /[^a-z]/gi;
const spaceRegEx = /\s+/gi;

function cleanUpWords(words) {
  let cleanedUpWords = words.replace(nonAlphaRegEx, ' ').replace(spaceRegEx, ' ');
  return cleanedUpWords;
}

console.log(cleanUpWords("---what's my +*& line?"));