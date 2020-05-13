function staggeredCase1 (str) {
 return str.split('').map((char, idx) => {
   if (idx % 2 === 0) {
     return char.toUpperCase();
   } else return char.toLowerCase();
 })
 .join('')
}

function staggeredCase2 (str) {
  let needUpper = true;

  return str.split('').map(char =>{
    if (/[a-z]/i.test(char)) {
      let newChar;
      if (needUpper) {
        newChar = char.toUpperCase();
      } else {
        newChar = char.toLowerCase()
      }
       
      needUpper = !needUpper;

      return newChar;
    } else return char;

  })
  .join('');
}

console.log(staggeredCase2('I Love Launch School!'));
console.log(staggeredCase2('ALL_CAPS'));
console.log(staggeredCase2('ignore 77 the 444 numbers'));