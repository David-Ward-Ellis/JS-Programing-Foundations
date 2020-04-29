function oddLists(array) {
  let oddArray = []
  for (let idx = 0; idx <= array.length - 1; idx += 2) {
    oddArray.push(array[idx])
  }
  return oddArray;
} 

console.log(oddLists([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(oddLists(['abc', 'efg', 'hij', 'klm', 'nop', 'grs', 'tuv', 'wxyz']));