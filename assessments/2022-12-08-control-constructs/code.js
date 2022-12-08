const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return "yes"
  }
  else return "no"
}

const countXs = (s) => {
  let numOfX = 0
  for (let i = 0; i < s.length; i++) {
    if (s.search(i) === ('x')) {
      numOfX++
    }
  }
  return numOfX
}

const timesTable = (n) => {
  emit(n1 * n2)
  return (n1, n2, (n * n))
}

const containsX = (s) => {
  if (s.search(/'x'/) === true ) {
    return true
  }
  else return false
}

