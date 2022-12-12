const makeRow = () => {
  return ['', '', '']
}

const makeBoard = () => {
  return ['', '', ''], ['', '', ''], ['', '', '']
}

const makeMove = (markXOrO, rowNumber, columNumber) => {
  return { 'markXOrO': xOrO, 'rowNumber': rowSpecifier, 'columNumber': columSpecifier }
}

//const placeMark = () =>{
//makeMove() makeBoard()
//}

const allTheSame = (array) => {
  if (array[0] === array[1]) {
    if (array[1] === array[2]) {
      return true
    }
  }
  else return false
}

const extractColumn = (array,index0To2) => {
return array[index0To2,0] +array[index0To2,1]+array[index0To2,2]
}

const recordMove = (array,move) => {
 array = [0,0,0,move.x+move.y]
return array
}