import React ,{useState} from 'react'

export default function Assignment1() {
    const [value,setValue]=useState('');
    const [Toprintvalue,setToprintValue]=useState('');


    const handelsubmit= ()=>{
        setToprintValue(value)
    }
  return (
    <div>
        <label>Enter any value</label><br/>
        <input type="text"  value={value} onChange={(e)=>{
            setValue(e.target.value)
        }}/>
        <input type="submit" onClick={handelsubmit}></input>
         <p>enter the submit button to print the value of input</p>
         <h1>{Toprintvalue}</h1>
        
    </div>
  )
}
