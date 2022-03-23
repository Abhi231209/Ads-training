// //  sort


// let numarr=[1,2,3,4,5,23,53,6]
// let sortedarr=numarr.sort((a,b)=>{console.log('first number: ',a,'second number: ',b,`if we subtract a-b : ${a-b}`);return (a-b)})
// console.log(sortedarr)

//// for maximum number

let formaxarr=[1,2,3,4,1,2,34,2]
let maxnumber= Math.max.apply(null,formaxarr)
console.log(maxnumber)


//// for min number

let minnumber=Math.min.apply(null,formaxarr)
console.log(minnumber)