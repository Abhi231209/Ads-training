class detail{
    constructor(name ,grad){
        this.name=name
        this.grad=grad
    }
}

const abhi=new detail('abhishek',"btech")

console.log(abhi.name)

//methods in javascript

class cars{
    constructor(carname,year){
        this.carname=carname
        this.year=year
    }
    call(){
        console.log(this.carname)
    }
}

let car=new cars('bmw','2015')
car.call()