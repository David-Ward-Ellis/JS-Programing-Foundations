function interleave(arr1, arr2) {
 return arr1.flatMap((element, index) => {
    return[element, arr2[index]]
    
  })

}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']))