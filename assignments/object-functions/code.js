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
return (object.y1 + object.y2)+(object.x1 + object.x2)
}