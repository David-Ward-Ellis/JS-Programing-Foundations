function getMidChar(str) {
  if (str.length % 2 === 1) {
    let half = Math.ceil(str.length / 2);

    return str.slice(str.length - half, half)
  }

  if (str.length % 2 === 0) {
    let half = (str.length / 2) + 1;
  
    return str.slice(str.length - half, half);
  }
}

console.log(getMidChar('I love Javascript'));
console.log(getMidChar('Launch School'));
console.log(getMidChar('Launch'));
console.log(getMidChar('Launchschool'));
console.log(getMidChar('x'));