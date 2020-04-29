function sequenceMultiples(limit, num) {
  let multiplesArray = [];

  for(counter = 1; counter <= limit; counter += 1) {
    multiplesArray.push(counter * num);
  }

  console.log(multiplesArray);
}

sequenceMultiples(5, 1);
sequenceMultiples(4, -7);
sequenceMultiples(3, 0);
sequenceMultiples(0, 10000);