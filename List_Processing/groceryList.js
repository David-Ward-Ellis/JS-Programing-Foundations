function buyFruit (arr) {
  let iteratedFruitArr = []

  arr.forEach(subArr => {
    subArr.forEach((item, _, arr) => {
      if (typeof item === 'string') {
        for (let count = 0; count < arr[1]; count += 1) {
        iteratedFruitArr.push(item)
        }
      }
    }) 
  })

  console.log(iteratedFruitArr)
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);