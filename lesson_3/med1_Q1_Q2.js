let text = "The Flinstones Rock!"
let indentation = ' '
function indent(str) {
 for (idx = 0; idx <= 10; idx += 1) {
   console.log(`${indentation.repeat(idx)} ${str}`)
 } 
}

indent(text);


let munsterDescription = 'The Munsters are creepy and spooky'
/* my solution
munsterDescription = munsterDescription.toUpperCase();
munsterDescription = munsterDescription.replace('T', 't');
munsterDescription = munsterDescription.replace('M', 'm');
*/

//Launch School solution

function mutateText(str) {
  str = str.split("").map(function(char) {
    if (char === char.toUpperCase()) {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  }).join("");

  return str;
}

munsterDescription = mutateText(munsterDescription)
console.log(munsterDescription);

function foo(param = "no") {
  return 'yes'
}

function bar(a = "no") {
  return a === "no" ? "yes" : "no";
}

let a = foo()
console.log(a)
console.log(bar(a))