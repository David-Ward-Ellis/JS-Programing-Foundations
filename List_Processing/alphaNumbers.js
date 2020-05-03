/* my solution
let alphaNumberObj = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5, 
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19
}

function alphaNumberOrder(arr) {
  let objKeys = Object.keys(alphaNumberObj);

  let alphaArray = arr.map (num => {
    return num = objKeys[num]
  })

  alphaArray.sort()


  alphaArray = alphaArray.map(word => {
    return word = alphaNumberObj[word] 
  })

  console.log(alphaArray)

}
*/

// Refractored LS solution

let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
                    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
                    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function alphaNumberOrder(array) {
  return array.sort((num1, num2) => {
    if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
      return 1;
    } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
      return -1;
    } else {
      return 0;
    }
  });
} 

console.log(alphaNumberOrder([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));