import React from 'react'
import ReactDom from "react-dom"


export default function Portals() {
  return (
      <div>
          this is portal page 
          {ReactDom.createPortal(<h1>portal</h1>,document.getElementById("myroot"))}
      </div>
  )
}
