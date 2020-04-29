function isBalanced(str) {
  let parenArray = str.split('').filter(char => {
    return char === '(' || char === ')' })

    
    if (parenArray.length % 2 !== 0) return false;
    
    if (parenArray.length % 2 === 0) {
      if (String(parenArray).startsWith(')')) {
      return false;
    } else if (String(parenArray).endsWith('(')) {
      return false;
    } else return true;      
  }

}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
console.log(isBalanced('Is thi(s) case) a (bug?') === false)