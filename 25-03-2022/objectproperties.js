// const person={
//     firstName:'abhishek',
//     lastName:'jangra'
// }

// console.log(person.firstName)
// console.log(person["firstName"])
// let x="firstName";
// console.log(person[x])


// for(let y in person){
//     console.log("before delete",y)

//     console.log(y)
// }

// delete person.lastName


// for(let y in person){
//     console.log("after delete",y)
// }



////nested object

// let obj1={
//   firstName:'abhishek',
//   cars:{
//     carName:'bmw'
//   }
// }

// console.log(obj1.cars.carName)


//// array in object

let obj3={
    cars:[ 
        {name:"bmw",model:'2017'},
        {name:"mercedes",model:'2018'}
    ]
}

console.log(obj3.cars[0].model)