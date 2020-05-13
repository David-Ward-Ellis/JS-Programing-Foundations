function wordLengths (str = '') {
  if (str === '') {
    return [];
  } else return str.split(' ').map(word => {
    return `${word} ${String(word.length)}`
  })
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));
console.log(wordLengths());