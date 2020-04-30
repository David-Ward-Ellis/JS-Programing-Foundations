let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

function filterMultiplesOfThree(arr) {
 return arr.map(function(array) {
   return array.filter(function(element) {
     return element % 3 === 0;
   })
 })
}

console.log(filterMultiplesOfThree(arr));