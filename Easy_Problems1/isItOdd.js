// function isOdd(num) { 
//   if (Math.abs(num) % 2 === 1) {
//     return true
//   } else return false
// } 

function isOdd(num) {
  return Math.abs(num) % 2 === 1
}



console.log(isOdd(2)); 
console.log(isOdd(5));
console.log(isOdd(-17)); 
console.log(isOdd(-8)); 
console.log(isOdd(0));
console.log(isOdd(7)); 