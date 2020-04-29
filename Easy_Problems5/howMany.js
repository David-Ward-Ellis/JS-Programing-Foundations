function countOccurences(arr) {
  let occurObject = {};
  
  arr = arr.map(item => item.toLowerCase());

  arr.forEach(element => {
    if (occurObject.hasOwnProperty(element)) {
      occurObject[element] += 1
    } else occurObject[element] = 1
  })

  logOccurences(occurObject);
}

function logOccurences(obj) {
  for (item in obj) {
    console.log(`${item} => ${obj[item]}`)
  }
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];
          
countOccurences(vehicles);