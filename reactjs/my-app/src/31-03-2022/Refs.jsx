import React ,{useRef,useState} from 'react'

export default function Refs() {
    // const [state1,useState1]=useState('')
    const Newref=useRef()
    console.log(Newref)
    let handelsubmit=(event)=>{
        event.preventDefault();
        Newref.current.focus()
    }
    
  return (
    <div>
        <form>
            <label>Enter Name</label>
            <input type="text" ref={Newref} ></input>
            <input type="submit" onClick={handelsubmit}/>
        </form>
    </div>
  )
}
