import React from 'react'
import CartContent from './cart-content'

export default function Cartprovider(props) {
    const addItemToCartHandel= item =>{};
    const removeItemToCartHandel= id =>{};

    const CartContext={
        items:[],
        totalamount:0,
        addItem: addItemToCartHandel,
        removeItem: removeItemToCartHandel,
    }

  return (
    <div>
        <CartContent.Provider value={CartContext}>
            {props.children}
        </CartContent.Provider>
    </div>
  )
}
