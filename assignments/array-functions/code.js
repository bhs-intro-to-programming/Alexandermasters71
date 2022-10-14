const countTens = (array) => {
  let num = 0
  for (let x = 0; x < array.length; x++) {
    if (array[x] === 10) {
      num++;
    }
  }
  return num
}
