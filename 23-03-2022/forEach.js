let arr=[1,4,2,5,13,2,42]
var arr2=[]
arr.forEach(function (elem,index){
    return arr2[index]=elem+1
})
console.log(arr2)