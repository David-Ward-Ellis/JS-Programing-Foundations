let obj = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};



function colorAndSize (object) {
  let valuesArray = Object.values(object);
  let capalitzed = word => word.slice(0, 1).toUpperCase() + word.slice(1);

  return valuesArray.map((objElement) => {
    if (objElement.type === 'fruit') {
      return objElement.colors.map(color => {
        return capalitzed(color)
        })
      }

    if (objElement.type === 'vegetable') {
      return objElement.size.toUpperCase()
    }
  })
}

console.log(colorAndSize(obj));