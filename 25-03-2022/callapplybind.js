function detai(firstName,lastName){
    this.firstname=firstName
    this.last=lastName
    return this.firstname+this.last
}

console.log(detai.call(this,'abhishek','jangra'))