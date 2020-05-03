
function sumOfSums (arr) {
  /* Using more of an imperative mode of coding
  let sum = 0;
  
  let arrOfSums = arr.map(num => {
    return sum = num + sum
  })

  return arrOfSums.reduce((sum, num) => sum + num, 0);

  */
 
  // Using a declarative mode, one of LS's solutions

  return arr.map((_, idx) => 
    arr.slice(0, idx + 1).reduce((sum, num) => sum + num, 0)            
    )
    .reduce((totalSum, num) => totalSum + num, 0)
};

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));