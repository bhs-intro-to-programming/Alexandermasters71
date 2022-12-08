const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return "yes"
  }
  else return "no"
}

const countXs = (s) => {
  let numOfX = 0
  for (let i = 0; 1 < s.length; i++) {
    if (s.search('x')) {
      numOfX++
    }
  }
  return numOfX
}

const timesTable = (n) => {
  emit(n * n)
  return
}