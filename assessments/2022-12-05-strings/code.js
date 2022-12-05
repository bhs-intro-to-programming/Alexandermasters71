const  upToX = (s) => {
return s.substring(0,s.indexOf('x'))
}

const charactersAround = (s,n) => {
return s.substring(n-1,n)+s.substring(n+1,s.length-n)
}

const middle = (s) => {
return s.substring(2,s.length-2)
}