function teddyAge(min, max) {
  let age = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return age;
}

console.log(`Teddy is ${teddyAge(20, 120)} years old!`)