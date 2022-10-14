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
  let num = 0
  for (const element of array) {
    if (element > 100) {
      num++;
    }
  }
  if (num > 0){
    return true 
  } else {
    return false
  }
}


const pyramid = (number) => {
  num 
}