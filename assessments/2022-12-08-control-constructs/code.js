const yesIfEven = (n) => {
  if (n % 2 === 0) {
    return "yes"
  }
  else return "no"
}

const countXs = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.search('x')) {
      i++
    }
  }
  return i
}