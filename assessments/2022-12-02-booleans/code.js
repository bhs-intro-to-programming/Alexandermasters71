const needHeavyCoat = (isgoingout,somewherecold) =>{
return isgoingout && somewherecold
}

const needSunscreen = (goingToBeach,goingSkiing) =>{
return goingToBeach || goingSkiing
}

const needMittens = (goingOutside,somewhereWarm) =>{
return goingOutside && ! somewhereWarm
}