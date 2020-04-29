function rightTriangle(length) {
  let iteration = 1
  let str = ' ';
  let star = '*'
  while (iteration <= length) {
    console.log(`${str.repeat(length - iteration)} ${star.repeat(iteration)}`)
    iteration += 1;
  }
}

rightTriangle(5);
rightTriangle(9);