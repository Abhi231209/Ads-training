import React ,{useRef} from 'react'

export default function Refs() {
    const Newref=useRef(null)
  
    let handelsubmit=(event)=>{
        event.preventDefault();
        Newref.current.focus()
        console.log(Newref.current.value)
    }
    
  return (
    <div>
        <form>
            <label>Enter Name</label>
            <input type="text"></input><br />
            <label>Enter Age</label>
            <input type="text" ref={Newref} ></input><br />
            <input type="submit" onClick={handelsubmit}/>
        </form>
    </div>
  )
}
