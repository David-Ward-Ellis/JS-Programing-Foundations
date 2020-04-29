function twice(num) {
  if (isDoubleNumber(num)) {
    return num;
  } else {
    return num * 2;
  }
}

function isDoubleNumber(number) {
  let numberString = String(number);
  let center = Math.floor(numberString.length / 2);
  let left = numberString.substring(0, center);
  let right = numberString.substring(center);

  return left === right;
}


console.log(twice(37));
console.log(twice(44));
console.log(twice(334433));
console.log(twice(444));
console.log(twice(107));
console.log(twice(103103));
console.log(twice(3333));
console.log(twice(7676));