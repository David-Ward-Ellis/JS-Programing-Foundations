function swapCase(str) {
  return str.split('').map(char => {
    if (char.match(/[A-Z]/)) {
      return char.toLowerCase();
    } else if (char.match(/[a-z]/)) {
      return char.toUpperCase();
    } else return char;
  })
  .join('');
}

console.log(swapCase('WeLcome TO this WorLD!'))
console.log(swapCase('4 scorE-and-SEVEN years AgO'));