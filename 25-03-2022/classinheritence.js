class details{
    constructor (firstname,lastname){
        this.firstname=firstname
        
    }

}

class roll extends details{
    constructor(details,rollno){
        super(details)
        this.roll=rollno
        
    }
    fullname(){
        return `my first name is ${this.firstname} and unniversity roll number is ${this.roll}` 
    }
}

let mydetails=new roll("abhishek",001)
console.log(mydetails.fullname())