function removeDuplicate(str) {
 let newString = '';
 for(idx = 0; idx <= str.length -1; idx += 1) {
   if (str[idx] !== str[idx +1]) {
     newString += str[idx]
   }
 }
 return newString
}

console.log(removeDuplicate('dddaily douuble'));
console.log(removeDuplicate('444abccbaabc'));
console.log(removeDuplicate("gggggggggggggggg"));
console.log(removeDuplicate('a'));
console.log(removeDuplicate(' '));