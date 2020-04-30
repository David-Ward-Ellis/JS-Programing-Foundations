let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sortByOdd(arr) {
  return arr.sort(function(a, b) {
    let aTotalOdds = 0;
    let bTotalOdds = 0;
    
    a.forEach(num => {
      if(num % 2 === 1) {
        aTotalOdds += num;
      }
    })

    b.forEach(num => {
      if (num % 2 === 1) {
        bTotalOdds += num;
      }
    })

    return aTotalOdds - bTotalOdds;
  })
}

console.log(sortByOdd(arr));