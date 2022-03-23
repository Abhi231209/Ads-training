let arr=['volvo','bmw','audi']
console.log(arr)


let arr1=new Array('new','array')
console.log(arr1)
console.log(arr1[1])

console.log(arr.length)
console.log(arr[arr.length-1])




// to insert value in array

let arr2=[]

arr2[0]='abhi';
arr2[1]='22'

let arr3=[]

arr3['name']='abhi';
arr3['age']='22'

console.log(arr3)


console.log(Array.isArray(arr3))


console.log(arr3 instanceof Array)


// for Each methods

let numar=[1,2,3,4,5]
let numar2=[]
numar.forEach((elem,ind)=>{
    return numar2[ind]=elem+1
})
console.log(numar2)


numar[numar.length]=6;
console.log(numar)

