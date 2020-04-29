function stringyStrings(num) {
  let str = ''

  while (str.length < num) {
    str += '1';
    if (str.length < num) {
      str += '0'
    }
  }
  return str;
}

console.log(stringyStrings(6));
console.log(stringyStrings(7));