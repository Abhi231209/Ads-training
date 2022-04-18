import { useState ,useRef} from "react"
import './Forcss.css'
const ForOnblur=()=>{
    const [value,setValue]=useState('')
    const [isValid,setIsValid]=useState(false)
    const [touched,setTouched]=useState(true)
    let inputref=useRef()
    const handelchange=(event)=>{
        setValue(event.target.value)
        setTouched(true)
    }
    const handelblur =()=>{
        setTouched(false)
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
            <input type="text" onChange={handelchange} onBlur={handelblur} value={value} ref={inputref}/>
            <input type="submit"/><br />
            {isValid && <p>Input is not Valid</p>}
            {!touched && <p>Please select the input field</p>}
        </form>
    )
}

export default ForOnblur;