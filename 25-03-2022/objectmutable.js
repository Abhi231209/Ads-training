const person={
    firstName:'abhishek',
    lastName:'jangra',
    age:22,
    details: function(){
        return `Full name is ${this.firstName} ${this.lastName} and age is ${this.age}`
    }
}
person.age=23

console.log(person.details())