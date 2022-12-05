const upToX = (s) => {
  return s.substring(0, s.indexOf('x'))
}

const charactersAround = (s, n) => {
  return s.substring(n - 1, n) + s.substring(n + 1, s.length - n)
}

const middle = (s) => {
  return s.substring(2, s.length - 2)
}

const pair = (s1, s2) => {
  return s1 + ' and ' + s2
}

const containsX = (s) => {
  if (s === s.search('x')) {
    return true
  }
  else return false
}

const slug = (s1,s2,s3) => {
return s1.toLowerCase() + '-' + s2.toLowerCase() + '-' + s3.toLowerCase()
}

const capitalize = (s) => {
return s.toUpperCase(0,1) + s.substring(1)
}