function sumDigits(num) {
let arrayOfDigits = String(num).split('');
return arrayOfDigits.reduce((sum, digit) => sum + Number(digit), 0)
 
}

console.log(sumDigits(23));
console.log(sumDigits(496));
console.log(sumDigits(123456789));