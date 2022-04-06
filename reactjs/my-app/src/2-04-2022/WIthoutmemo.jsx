import React, { useState } from 'react'
import Toimportname from './Toimportname'
import Withmemo from './Withmemo'

function WIthoutmemo() {
    const [value,setValue]= useState(false)
    console.log('Withoutmemo called')
    const handelclick=()=>{
        setValue(()=>{
           return (value?false:true)
        })
    }
  return (
    <div>
        <h1>Hi There</h1>
        {/* <p><Toimportname value={false} /></p> */}
        <p><Withmemo value={false} /></p>
        <button onClick={handelclick} >Click me</button>
        
       
    </div>
  )
}

export default WIthoutmemo