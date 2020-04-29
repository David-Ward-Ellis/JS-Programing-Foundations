function whatCentury(year) {
  let century = Math.ceil(year / 100).toString();

  if (century.endsWith('1') && !century.endsWith('11')) {
    return century.concat('st');
  } else if(century.endsWith('2') && !century.endsWith('12')) {
    return century.concat('nd');
  } else if(century.endsWith('3') && !century.endsWith('13')) {
    return century.concat('rd');
  } else return century.concat('th');
}

console.log(whatCentury(2000));
console.log(whatCentury(2001));
console.log(whatCentury(1965));
console.log(whatCentury(256));
console.log(whatCentury(5));
console.log(whatCentury(10103));
console.log(whatCentury(1052));
console.log(whatCentury(1127));
console.log(whatCentury(11201));