var obj={
    name:'abhishek',
    lastname:'jangra'
}
console.log(obj.name)
console.log(obj)

var obj2={
    name:'abhishek',
    lastname:'jangra',
    fullname : function (){
        console.log(this.name+this.lastname)
    }
}

obj2.fullname()