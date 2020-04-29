function reverseArray(list) {
  let result = reverse(list);

  console.log(list === result);
  console.log(result);

  return list;
}

function reverse(arr) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx < arr.length / 2) {
    [arr[leftIdx], arr[rightIdx]] =
    [arr [rightIdx], arr[leftIdx]]

    leftIdx += 1;
    rightIdx -= 1;
  }

  return arr;
} 

let array = ['a', 'b', 'c', 'd', 'e']
reverseArray(array);
reverseArray(['abc']);
reverseArray([1, 2, 3, 4]);
reverseArray([]);