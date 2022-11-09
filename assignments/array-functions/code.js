const countTens = (array) => {
  let num = 0
  for (const element of array) {
    if (element === 10) {
      num++;
    }
  }
  return num
}


const sum = (array) => {
  let add = 0
  for (const element of array) {
    add += element;
  }
  return add
}

const evens = (array) => {
  const evenArray = []
  for (const element of array) {
    if (element % 2 == 0) {
      evenArray.push(element)
    }
  }
  return evenArray
}

const anyOverOneHundred = (array) => {
  for (const element of array) {
    if (element > 100) 
      return true
  }
   return false
}


const pyramid = (number) => {
  const array = [] 
  for (let x = 1; x <= number; x++){
    for (let i = 1; i <= x; i++) {
      array.push(x)
    }
  }
  return array
}