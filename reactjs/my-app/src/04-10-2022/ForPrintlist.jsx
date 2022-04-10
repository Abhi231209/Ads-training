import React from 'react'

export default function ForPrintlist(props) {
console.log(props.data)
  return (
    <div>
        {props.data.map((val)=>{
         return <h1>{val.title}</h1>
        })}       
    </div>
  )
}
