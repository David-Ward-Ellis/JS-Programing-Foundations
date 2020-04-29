function muliplyTwoNum (num1, num2) {
  return num1 * num2;
}

console.log(muliplyTwoNum(3, 5));

let square = num => {
  return muliplyTwoNum(num, num)
}

console.log(square(5));