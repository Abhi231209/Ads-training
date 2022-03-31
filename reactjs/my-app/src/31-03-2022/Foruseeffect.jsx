import React,{useEffect,useState} from 'react'

export default function Foruseeffect() {
   const [firstname, setFirstName]=useState('Abhishek')

   function tochangestate (){
    setFirstName('jangra')
   }
   useEffect(()=>{
       console.log('useeffect is called')
       return ()=>{
         console.log('return called')
       }
   },[firstname])
  return (
    <div>
         <h1>{firstname}</h1>
         <button onClick={tochangestate}>to change State</button>
    </div>
  )
}
