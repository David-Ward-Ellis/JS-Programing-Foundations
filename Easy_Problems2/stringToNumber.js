function stringToInteger(str) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  }
  
  
  
  if(str.charAt(0) === '+') {
    str = str.slice(1);
    let arrayOfDigits = str.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
  } else if (str.charAt(0) === '-') {
    str = str.slice(1);
    let arrayOfDigits = str.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) - digit));
    return value;
  } else {
    let arrayOfDigits = str.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
  }
}


let string1 = '-1234';
let string2 = '+4321';
let string3 = '430';

console.log(stringToInteger(string1) === -1234);
console.log(stringToInteger(string2) === 4321);
console.log(stringToInteger(string3) === 430)