let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

function addMaleAges(obj) {
  let totalAge = 0;

  for (let munsterName in obj) {
  if (obj[munsterName].gender === 'male') {
    totalAge += obj[munsterName].age
    }
  }
  return totalAge;
}

console.log(addMaleAges(munsters))