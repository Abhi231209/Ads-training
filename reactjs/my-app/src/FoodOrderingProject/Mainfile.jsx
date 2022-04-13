import React, { useState } from 'react'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import Cart from './Components/Cart/Cart'
import Cartprovider from './store/Cartprovider';

export default function Mainfile() {
  const [showCart,setShowCart]=useState(false)
  const ShowCartHandeler=()=>{
    setShowCart(true)
  }
  const HideCartHandeler=()=>{
    setShowCart(false)
  }
  return (
    <Cartprovider>
      {showCart && <Cart  onclose={HideCartHandeler}/>} 
        <Header  onShowCart={ShowCartHandeler}/>
        <main>
          <Meals/>
        </main>
    </Cartprovider>
  )
}
