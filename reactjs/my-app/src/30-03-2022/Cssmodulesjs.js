import React, { useState } from 'react'
import Style from './Cssmodules.module.css'

export default function Cssmodulesjs() {
    const [value, setvalue] = useState("")
    var handelchange=(e)=>{
        setvalue(e.target.value)
    }

  return (
  <>
    <input type="text" value={value} onChange={handelchange}></input>
    <div>this is div</div>
    <button className={Style['button']}>Click me</button>
  </> 
  )
}
