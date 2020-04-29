function gradeAverage(grd1, grd2, grd3) {
  let average = (grd1 + grd2 + grd3) / 3;

  if (average >= 90) {
    return 'A';
  } else if (average >= 80) {
    return 'B';
  } else if (average >= 70) {
    return 'C';
  } else if (average >= 60) {
    return 'D';
  } else return 'F';
}

console.log(gradeAverage(90, 95, 97));
console.log(gradeAverage(50, 50, 95));
console.log(gradeAverage(80, 85, 86));
console.log(gradeAverage(75, 72, 74));
console.log(gradeAverage(65, 65, 62));
console.log(gradeAverage(50, 52, 55));