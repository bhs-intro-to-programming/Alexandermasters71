const totalEggs = (hardBoiled,softBoiled) => {
  return hardBoiled + softBoiled
}
const chocolatesPerPerson = (numberOfPeople,numberOfChoclates) => {
  return Math.abs(numberOfPeople-numberOfChoclates)
}

const extraChocolates = (numberOfPeople,numberOfChoclates) => {
return numberOfChoclates%numberOfPeople
}

const leftOut = (numberOfPeople,numberOfChoclates) => {
return numberOfChoclates/numberOfPeople
}

const probabilityAllHeads = (numberOfFlips) => {
return 1/2 /(numberOfFlips)
}