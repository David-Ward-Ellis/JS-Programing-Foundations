let arr = [['b', 'c', 'a'], [2, 1, 3], ['blue', 'black', 'green']];

let sortedArr = arr.map(array => {
  if (array.includes(Number)) {
    return array.slice().sort((a, b) => {
      return Number(b) - Number(a);
    })
   } else return array.slice().sort().reverse()
})

console.log(sortedArr);