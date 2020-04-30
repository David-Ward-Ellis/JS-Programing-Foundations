let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

for (let munsterName in munsters) {
  let name = munsterName;
  let age = munsters[munsterName].age;
  let gender = munsters[munsterName].gender;
  
  console.log(`${name} is a ${age}-year-old ${gender}`)
}
