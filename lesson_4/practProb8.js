let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function arrayToObject (arr) {
  let objectFromArray = {};
  
  arr.forEach(function(element, index){
    objectFromArray[element] = index;
  })

  return objectFromArray;
}

console.log(arrayToObject(flintstones))