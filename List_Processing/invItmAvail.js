let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

function isItemAvailable(inv, arr) {
  let checkedInv = transactionsFor(inv, arr);
  
  return checkInventory(checkedInv) > 0; 
}

function transactionsFor(invNum, transArr) {
  return transArr.filter(obj => obj.id === invNum)
}

function checkInventory (invArr) {
  let totalQuant = 0;

  invArr.forEach(obj => {
    if (obj.movement === 'in') {
      totalQuant += obj.quantity;
    } else if (obj.movement === 'out') {
      totalQuant -= obj.quantity
    }
  })

  return totalQuant;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(105, transactions));