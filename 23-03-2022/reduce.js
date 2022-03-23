let arr=[2,5,23,34,32,42]

let sum=arr.reduce((acc,elem)=>{
      return acc+elem;
},0)

console.log(sum)