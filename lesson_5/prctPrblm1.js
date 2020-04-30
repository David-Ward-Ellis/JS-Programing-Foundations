let arr = [10, 11, 9, 7, 8];

function sortArray(arr) {
 return arr.sort((a, b) => Number(a) - Number(b))
}

console.log(sortArray(arr));