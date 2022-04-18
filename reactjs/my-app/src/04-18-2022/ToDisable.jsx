import { useState ,useRef} from "react"
import './Forcss.css'
const ToDisable=()=>{
    const [value,setValue]=useState('')
    const [isValid,setIsValid]=useState(false)
    const [touched,setTouched]=useState(true)
    let inputref=useRef()
    const forvalid=value.trim()==='';
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
        <div className='form-control' style={{marginLeft: '30%'}}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' onChange={handelchange} onBlur={handelblur} value={value} ref={inputref}/>
            {isValid && <p className='error-text'>Input is not Valid</p>}
            {!touched && <p className='error-text'>Please select the input field</p>}
        </div>
        <div className="form-actions">
            <button className="buttons" disabled={forvalid}>Submit</button>
            
        </div>
    </form>
        
    )
}

export default ToDisable;