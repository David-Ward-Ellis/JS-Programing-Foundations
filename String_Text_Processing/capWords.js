function wordCap (str) {
  
  return str.split(' ').map(word => 
    word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(wordCap('four score and seven'));
console.log(wordCap('the javaScript language'));
console.log(wordCap('This is a "quoted" word'));

