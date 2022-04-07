let person = {}
person.firstname="abhishek"
person.lastname="jangra"
person.printname=function (){
    return this.firstname + this.lastname
} 

console.log(person.printname())