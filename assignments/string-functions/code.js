const findFnord = (s) => {
  return s.indexOf('fnord')
}

const stringContains = (s1, s2) => {
  if (s1.search(s2)) {
    return false
  } else {
    return true
  }
}