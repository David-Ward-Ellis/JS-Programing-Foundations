function findFibonacciIndexByLength(idx) {
  let num1 = 1;
  let num2 = 1;
  let str = ' ';
  let counter;
  for (counter = 1; str.length < idx; counter += 1) {
    fib = num1 + num2;
    num1 = num2;
    num2 = fib
    str = num1.toString()
    if (fib > Number.MAX_SAFE_INTEGER) {
      return ('Error, number is too high to compute')
    }
  }
  return counter;
}

console.log(findFibonacciIndexByLength(2));
console.log(findFibonacciIndexByLength(10));
console.log(findFibonacciIndexByLength(16));
console.log(findFibonacciIndexByLength(17));

