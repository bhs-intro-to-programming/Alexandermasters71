const needHeavyCoat = (goingOutside,isCold) => {
  if(goingOutside && isCold){
    return true
  }
  else return false
}

const needSunscreen = (goingToTheBeach,goingSkiing) => {
if(goingToTheBeach || goingSkiing){
return true
}
else return false
}

const needMittens = (goingOutside,inWarmEnviroment) => {
if(goingOutside && ! inWarmEnviroment){
return true
}
else return false
}