import { useState ,useRef} from "react"
import './Forcss.css'
const ForForms=()=>{
    const [value,setValue]=useState('')
    const [isValid,setIsValid]=useState(false)
    let inputref=useRef()
    const handelchange=(event)=>{
        setValue(event.target.value)
    }
    const handelsubmit=(event)=>{
        event.preventDefault()
        if(value.length===0){
            setIsValid(true)
            console.log("error")
            return
        }
        const enteredvalue=inputref.current.value
        console.log(enteredvalue)
        setValue('')
    }
    return(
        <form onSubmit={handelsubmit}>
            <input type="text" onChange={handelchange} value={value} ref={inputref}/>
            <input type="submit"/><br />
            {isValid && <p>Input is not Valid</p>}
        </form>
    )
}

export default ForForms;