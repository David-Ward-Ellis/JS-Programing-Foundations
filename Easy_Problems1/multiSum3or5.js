function multiSum3Or5(num) {
  let sum = 0;
  for (let counter = 1; counter <= num; counter += 1) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter;
    }
  }
  return sum;
}

console.log(multiSum3Or5(3));
console.log(multiSum3Or5(5));
console.log(multiSum3Or5(10));
console.log(multiSum3Or5(20));
console.log(multiSum3Or5(1000));