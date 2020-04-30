let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

function createObject (arr) {
  let obj = {};

  arr.forEach(subArray => {
    obj[subArray[0]] = subArray[1]
  })

  return obj;
}

console.log(createObject(arr));