const forget={
    fullname:'abhishek',
    lastname:'jangra',
    get names(){
        return this.fullname + this.lastname
    }
}
console.log(forget.names)

////setter

const forset={
    fullname:'dinesh',
    set names(namg){
      this.fullname=namg
    }
}

forset.names="abhishek jangra"

console.log(forset.fullname)