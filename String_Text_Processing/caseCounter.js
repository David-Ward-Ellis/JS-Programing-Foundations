function letterCaseCount (str) {
  let caseCountObj = {
    upperCase: 0,
    lowerCase: 0,
    neither: 0
  }

  str.split('').forEach(char => {
    if (char.match(/[A-Z]/)) {
       caseCountObj.upperCase += 1;
    } else if (char.match(/[a-z]/)) {
      caseCountObj.lowerCase += 1;
    } else caseCountObj.neither += 1;  
  })

  return caseCountObj;
}


console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));
