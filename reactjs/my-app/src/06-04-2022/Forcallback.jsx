import React, { useState ,useCallback} from 'react'
import Toimportname from '../2-04-2022/Toimportname'
import Withmemo from '../2-04-2022/Withmemo'


function Forcallback() {
    const [value,setValue]= useState(false)
    console.log('Withoutmemo called')
    const handelclick=useCallback (()=>{
        setValue(()=>{
           return (value?false:true)
        })
    },[])
  return (
    <div>
        <h1>Hi There</h1>
        <p><Toimportname value={false} /></p>
        <p><Withmemo value={false} /></p>
        <button onClick={handelclick} >Click me</button>
        
       
    </div>
  )
}

export default Forcallback