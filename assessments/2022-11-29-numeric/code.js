const totalEggs = (hardBoiled,softBoiled) => {
  return hardBoiled + softBoiled
}
const chocolatesPerPerson = (numberOfPeople,numberOfChoclates) => {
  return Math.abs(numberOfChoclates-numberOfPeople)
}

const extraChocolates = (numberOfPeople,numberOfChoclates) => {
return numberOfChoclates%numberOfPeople
}

const leftOut = (numberOfPeople,numberOfChoclates) => {
return numberOfChoclates/numberOfPeople
}