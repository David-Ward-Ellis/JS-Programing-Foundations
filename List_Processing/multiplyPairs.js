function multiplyAllPairs(arr1, arr2) {
  let multipliedArray = arr1.flatMap(num1 => {
    return arr2.map(num2 => num1 * num2)
   });

  return multipliedArray.sort((a, b) => Number(a) - Number(b))
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));