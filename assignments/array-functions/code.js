const countTens = (array) => {
  let ten = 0
  for(const element of array){
    if (element === 10){
      ten++
    }
}
    return ten
}

const  sum = (array) =>{
 let add = 0
 for(const element of array){
   add += element
 }
return add
}

const evens = (array) => {
 let newarray =[]
  for(const element of array){
if (element%2==0){
  newarray.push(element)
}
  }
  return newarray
}

const anyOverOneHundred = (array) => {
for (const element of array){
   if (element>100)
     return true
     else
     return false
}
}