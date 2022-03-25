let obj1={
    fullname: 'abhishek',
    lastname:'jangra',
    printname : function(){
        return this.fullname+" "+this.lastname
    }
}
let obj2={
    fullname: 'dinesh',
    lastname: 'pandit'
}

const fullname2=obj1.printname.bind(obj2)
console.log(fullname2)