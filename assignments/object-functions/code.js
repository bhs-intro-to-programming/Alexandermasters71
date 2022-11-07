const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { "x": x, "y": y }
}

const emptyObject = () => {
  return {}
}

const distance = (object) => {
  return Math.sqrt((object.x1 - object.x2) ** 2 + (object.y1 - object.y2) ** 2)
}