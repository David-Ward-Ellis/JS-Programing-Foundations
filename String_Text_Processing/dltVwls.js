function dltVwls (arr) {
  vwlRegex = /[a,e,i,o,u]/i

  return arr.map(word => {
    return word.split('').filter(char => {
        return !vwlRegex.test(char);
      })
      .join('') 
    })
} 

console.log(dltVwls(['abcdefghijklmnopqrstuvwxyz']));
console.log(dltVwls(['green', 'YELLOW', 'black', 'white']));
console.log(dltVwls(['ABC', 'AEIOU', 'XYZ']));