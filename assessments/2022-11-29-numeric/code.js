const totalEggs = (hardBoiled, softBoiled) => {
  return hardBoiled + softBoiled
}
const chocolatesPerPerson = (numberOfPeople, numberOfChoclates) => {
  return (numberOfPeople % numberOfChoclates)
}

const extraChocolates = (numberOfPeople, numberOfChoclates) => {
  return numberOfChoclates % numberOfPeople
}

const leftOut = (numberOfPeople, numberOfChoclates) => {
  return numberOfChoclates / numberOfPeople
}

const probabilityAllHeads = (numberOfFlips) => {
  return 1 / 2 / numberOfFlips
}

const futureHour = (currentHour, nextHours) => {
  return currentHour + (nextHours % 24)
}

const presentsBudget = (numberOfPresents, averagePrice) => {
  return numberOfPresents * averagePrice
}

const perPresent = (totalAmount, numberOfPresents) => {
  return Math.floor(totalAmount / numberOfPresents)
}

const wrappingCombos = (kindsOfPaper, kindsOfRibbons, kindsOfDecorBows) => {
  return kindsOfPaper * kindsOfRibbons * kindsOfDecorBows
}

const biggestNumber = (numberOfDigits) => {
  return (10**numberOfDigits)-1 
}