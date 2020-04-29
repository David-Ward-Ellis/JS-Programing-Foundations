/*
**My attempt
function welcomeMessage(arr, obj) {
  let name = arr. join(' ');
  let titleAndOccup = Object.values(obj).join(' ');
  return `Hello, ${name}! It is nice to meet a ${titleAndOccup}`
}

*/

// Launch School's version--does not need to assign variables and uses
// the object's keys to access the values

function welcomeMessage(arr, obj) {
  return `Hello, ${arr.join(" ")}! It is nice to meet a ${obj["title"]} ${obj["occupation"]}.`
}
myArray = ['Immanuel', 'Kant'];

myObject = {
  title: "Master",
  occupation: "Philosopher"
};

console.log(welcomeMessage(myArray, myObject));