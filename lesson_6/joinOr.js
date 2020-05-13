function joinOr (arr, seprtr = ', ', conj = 'or') {
  let resultStr = '';

  if (arr.length === 0) {
    return resultStr;
  } else if (arr.length === 1) {
    return resultStr += arr[0];
  } else if (arr.length === 2) {
    return resultStr += `${arr[0]} ${conj} ${arr[1]}`;
  } else arr.forEach((element, idx) => {
    if (idx === arr.length - 1) {
      return resultStr +=`${conj} ${element}`;
    } else return resultStr += `${element}${seprtr}`;
  })

  return resultStr;
}

console.log(joinOr([1, 2]));
console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
console.log(joinOr([1]));
console.log(joinOr([]));