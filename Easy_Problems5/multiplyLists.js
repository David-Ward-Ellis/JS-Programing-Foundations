function multiplyLists(arr1, arr2) {
  let multiplyArray = [];

  /* Using forEach
    arr1.forEach(function(num, index) {
     multiplyArray.push(num * arr2[index])
   })
   */
  
   // Using for loop
  for (let idx = 0; idx < arr1.length; idx += 1) {
    multiplyArray.push(arr1[idx] * arr2[idx])
  }

  /* Using map
  let mapMulti = arr1.map((num, index) =>{
  return num * arr2[index]
  })

  return mapMulti;
  */

 return multiplyArray;
}

console.log(multiplyLists([3, 5, 7], [9, 10, 11]))