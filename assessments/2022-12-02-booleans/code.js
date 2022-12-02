const needHeavyCoat = (goingOutside, isCold) => {
  if (goingOutside && isCold) {
    return true
  }
  else return false
}

const needSunscreen = (goingToTheBeach, goingSkiing) => {
  if (goingToTheBeach || goingSkiing) {
    return true
  }
  else return false
}

const needMittens = (goingOutside, inWarmEnviroment) => {
  if (goingOutside && !inWarmEnviroment) {
    return true
  }
  else return false
}

const isVenomous = (striped, blueHead) => {
  if (striped || !blueHead) {
    return true
  }
  else return false
}

const okaySpeed = (speedLimit, carsSpeed) => {
  if (Math.abs(carsSpeed - speedLimit === 10)) {
    return true
  }
  else return false
}

const twiceAsExpensive = (price, price1) => {
  if (price1 * 2 === price) {
    return true
  }
  else return false
}

const winningRecord = (wins, losses, ties) => {
  if (wins * 1 / 2 >= (losses + ties)) {
    return true
  }
  else return false
}

const isMagicNumber = (n1) => {
if(n1 === 42||17){
  return true
}
else return false
}