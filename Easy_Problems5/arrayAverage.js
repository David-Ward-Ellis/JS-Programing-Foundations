function arrayAverage(arr) {
  //let sum = 0;

  // arr.forEach(num => sum += num);

  let total = arr.reduce((sum, num) => sum + num, 0)

  let average = Math.floor(total / arr.length);

  return average;
}

console.log(arrayAverage([1, 5, 87, 45, 8, 8]));
console.log(arrayAverage([9, 47, 23, 95, 16, 52]));