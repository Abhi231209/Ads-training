import React, { useState } from 'react'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'

export default function Mainfile() {
  const [showCart,setShowCart]=useState(false)
  const ShowCartHandeler=()=>{
    setShowCart(true)
  }
  const HideCartHandeler=()=>{
    setShowCart(false)
  }
  return (
    <div>
      {showCart && <Cart  onclose={HideCartHandeler}/>} 
        <Header  onShowCart={ShowCartHandeler}/>
        <main>
          <Meals/>
        </main>
    </div>
  )
}
