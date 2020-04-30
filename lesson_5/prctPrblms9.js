let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(array => {
    return array.slice().sort((a, b) => {
      if (array.includes(Number)) {
        return Number(a) - Number(b);
      }
      
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else return 0;
    })
   })

console.log(sortedArr);