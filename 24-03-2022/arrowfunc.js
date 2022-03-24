var arrfunc=()=>{
    console.log('arrow function')
}
arrfunc()

var forthis=()=> console.log(this)
forthis()

var func2=()=>{
    var forthis2=()=>{
        console.log(this)
    }
    forthis2()
}
func2()