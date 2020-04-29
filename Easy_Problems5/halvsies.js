function halvsies(array) {
  let result = [[], []];

  if (array.length % 2 === 0) {
    for (let idx = 0; idx < array.length; idx += 1) {
      if(idx < array.length / 2) {
        result[0].push(array[idx])
      }

      if (idx >= array.length / 2) {
        result[1].push(array[idx])
      }
    }
  }
  
  if (array.length % 2 === 1) {
    for (let idx = 0; idx < array.length; idx += 1) {
      if(idx <= array.length / 2) {
        result[0].push(array[idx])
      }

      if (idx > array.length / 2) {
        result[1].push(array[idx])
      }
    }
  }
  
  return result
}

console.log(halvsies([1, 2, 3, 4]))
console.log(halvsies([]))
console.log(halvsies([1, 2, 3, 4, 5]))
console.log(halvsies([5]))
console.log(halvsies([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]))