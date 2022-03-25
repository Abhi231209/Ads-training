const person =new Object()
person.firstname="dinesh"
person.lastname='jangra'
person.fullname=function (){
    return this.firstname + this.lastname
}

console.log(person.fullname())