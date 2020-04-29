let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function calcAges(obj) {
 let ageArray = Object.values(obj);
 
  // using reduce:
  // return ageArray.reduce((acc, age) => acc + age, 0); 

  // using forEach
  
  let totalAges = 0
  ageArray.forEach(function(age) {
    return totalAges += age
  })
 
  return totalAges;
}

console.log(calcAges(ages))