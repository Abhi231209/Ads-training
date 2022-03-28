import React,{useState} from 'react'

const Forstate=(props)=>{
    const [name,setName]=useState(props.name)
    const handelname=()=>{
        setName(props.setname)
    }
    return (
        <div>
          <h1>{name}</h1>
          <h2>to Change name to full name</h2>
          <button onClick={handelname}>full name</button>
        </div>
    )
}

export default Forstate;