function runningTotal(numArray) {
  let adder = 0;

  let runTotalArr = numArray.map(num => adder += num)

  return runTotalArr;
}

console.log(runningTotal([2, 5, 13]));
console.log(runningTotal([14, 11, 7, 15, 20]));
console.log(runningTotal([5]));
console.log(runningTotal([]));
