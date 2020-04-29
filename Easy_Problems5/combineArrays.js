function union(arr1, arr2) {
  let unionArray = [];

  for (let idx = 0; idx < arr1.length || idx < arr2.length; idx += 1) {
    if (arr1[idx] === arr2[idx] && !unionArray.includes(arr1[idx])) {
      unionArray.push(arr1[idx])
    } 
    
    if (arr1[idx] !== arr2[idx] && !unionArray.includes(arr1[idx])) {
      unionArray.push(arr1[idx]);
    } 
    
    if (arr1[idx] !== arr2[idx] && !unionArray.includes(arr2[idx])) {
      unionArray.push(arr2[idx])
    }

  }

  checkForUndefined(unionArray);

  return unionArray;
}

function checkForUndefined(array) {
  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === undefined) {
      array.splice(idx, 1)
    }
  }
}

console.log(union([1, 3, 5], [3, 6, 9]));
console.log(union([1, 3, 5], [3, 6, 9, 8]));
console.log(union([1, 3, 5], [3, 6, 9, 10, 3, 24, 18]));