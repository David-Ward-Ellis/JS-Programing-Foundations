function nameSwap (name) {
  let nameArray = name.split(' ');
  
  let firstName = nameArray.shift();
  let lastName = nameArray.pop();
  let middleName = nameArray.join(' ');

  console.log(`${lastName}, ${firstName} ${middleName}`)
}

nameSwap('Isaac Jerry Wayne Ellis')