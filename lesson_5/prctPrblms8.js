let regex = (/[aeiou]/)

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

let objValues = Object.values(obj);

objValues.forEach(arr => {
  arr.forEach(word => {
    word.split('').forEach(char => {
      if (regex.test(char)){
        console.log(char)
      } 
    })
  })
})