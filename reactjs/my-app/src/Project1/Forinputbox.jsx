import React, { useRef, useState } from 'react'
import './Project1.css'

function Forinputbox() {
  
  const [toprint,setToprint]=useState([
    {text:'enter the first text',id:0},
  ])
  const [froinputvalue,setFroinputvalue]=useState('')
   const refforinput=useRef()
  
  
   const handelclick=()=>{   
     if(refforinput.current.value.length!=0){
       setToprint((prevlist)=>{
         let update=[...prevlist]
         update.unshift({text:refforinput.current.value,id:toprint.id+1})
        return update
       })
      }
       setFroinputvalue('')
   }
   const handelchange =(e)=>{
    setFroinputvalue(e.target.value)
   }

   
  return (
    <div className='maindiv'>
      <div className='Forinput'>
        <label> To Do list</label><br></br>
        <input type="text" ref={refforinput} value={froinputvalue} onChange={handelchange}/><br></br>
        <button onClick={handelclick} className="Clickmebutton">Click me</button>
      </div>
        {toprint.map((val)=>{
          return <p className='ptag' >{val.text}</p>
        })}
    </div>
  )
}
export default  React.memo(Forinputbox)