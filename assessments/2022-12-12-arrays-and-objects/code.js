const makeRow = () => {
  return ['','','']
}

const makeBoard = () => {
  return ['','',''],['','',''],['','','']
}

const makeMove = (markXOrO,rowNumber,columNumber) => {
  return  {'markXOrO' :xOrO,'rowNumber':rowSpecifier,'columNumber' :columSpecifier}
}

//const placeMark = () =>{
  //makeMove() makeBoard()
//}

const allTheSame = (array) =>{
  if(array[0]=== array[1]){
    if(array[1]===array[2]){
      return true
    }
   
  }
  else return false
}