import React ,{useState} from 'react'

export default function Assignment1() {
    const [inputvalue,setInputValue]=useState('');
    const [Toprintvalue,setToprintValue]=useState('');


    function handelsubmit(){
        setToprintValue(inputvalue)
    }
    function handelvalue(e){
      setInputValue(e.target.value)
    } 
  return (
    <div>
      <form>
        <label>Enter any value</label><br/>
        <input type="text"  value={inputvalue} onChange={handelvalue}/>
        <input type="submit" onClick={handelsubmit}></input>

      </form>
         <p>enter the submit button to print the value of input</p>
         <h1>{Toprintvalue}</h1>
        
    </div>
  )
}
