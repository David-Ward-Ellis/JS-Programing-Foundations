function multAverage(arr) {
  let product = 1;

  arr.forEach(num => product *= num)

  return Number(product / arr. length).toFixed(3)
}

console.log(multAverage([3, 5]));
console.log(multAverage([2, 5, 7, 11, 13, 17]))