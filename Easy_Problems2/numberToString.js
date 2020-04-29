const STRING = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

function integerToString(num) {
 let result = '';

 do {
   let remainder = num % 10;

   num = Math.floor(num / 10);
    
   result = STRING[remainder] + result;
 } while(num > 0)
 return result;
}

function signedIntegerToString(num){
  switch(Math.sign(num)) {
    case +1:
      return `+${integerToString(num)}`;
    case -1:
      return `-${integerToString(-num)}`;
    default:
      return integerToString(num)
  }
}
console.log(signedIntegerToString(98) === "+98");
console.log(signedIntegerToString(-98) === "-98");
console.log(signedIntegerToString(0) === '0')
