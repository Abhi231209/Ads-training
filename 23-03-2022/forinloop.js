let obj={name:'abhishek',lastname:'jangra'}
for(let x in obj){
    // console.log(x)
    console.log(obj[x])
}


let arr=[13,12,31,2,3,21]
arr.forEach((ele,ind,arr)=>{
    console.log(ind," :",ele)
})