import React ,{useRef,useState} from 'react'

export default function Usingrefassignment1() {
    const [value,setValue]=useState('');
    const Forprint =useRef();

    const handelsubmit= ()=>{
        setValue(Forprint.current.value)
    }
  return (
    <div>
        <label>Enter any value</label><br/>
        <input type="text" ref={Forprint} />
        <input type="submit" onClick={handelsubmit}></input>
         <p>enter the submit button to print the value of input</p>
         <h1>{value}</h1>
        
    </div>
  )
}
