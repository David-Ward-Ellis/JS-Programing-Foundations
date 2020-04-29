function exo(oper1, oper2) {
  if ((oper1 && !oper2) || (!oper1 && oper2)) {
    return true
  } 
   return false
}

console.log(exo(5, 0));
console.log(exo(1, 5));
console.log(exo(true, true));
console.log(exo(true, false));
console.log(exo(false, false));
console.log(exo(false, true));