const getX = (object) => {
  return object.x
}

const point = (x,y) => {
  return {"x" : x,"y" : y}
}

const emptyObject = () => {
  return {}
}

const distance = (object) => {
return Math.sqrt((object.y1 - object.y2)**2+(object.x1 - object.x2)**2)
}