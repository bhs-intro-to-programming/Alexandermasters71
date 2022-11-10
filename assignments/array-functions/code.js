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
let hun = 0
for (const element of array){
   if (hun>100){
     num++
   }
   if (hun>0){
     return ture
   }else{
     return console.log(under100)
   }
   }
}