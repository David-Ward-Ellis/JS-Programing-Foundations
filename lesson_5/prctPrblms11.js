let arrayWithObjects = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

/*using methods for making a deep copy

function addOne (arr) { 
  let serializedArray = JSON.stringify(arr);
  let updatedArray = JSON.parse(serializedArray);

  return updatedArray.map(obj => {
    for (let key in obj) {
      obj[key] += 1;
    } 
    return obj;
  })
}

*/


function addOne (arr) { 
  return arr.map(obj => {
    let augmentedValues = {};

    for (let key in obj) {
      augmentedValues[key] = obj[key] + 1;
    } 
    return augmentedValues;
  })
}

console.log(addOne(arrayWithObjects));
console.log(arrayWithObjects);

