function leadingSubString(str) {
 let result = '';  
 return str.split('').map(char => {
  return result += char
 });
}

console.log(leadingSubString('abc'));
console.log(leadingSubString('a'));
console.log(leadingSubString('xyzzy'));