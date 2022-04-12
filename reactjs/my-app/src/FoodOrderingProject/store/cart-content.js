import React from 'react'

const CartContent = React.createContext({
    items:[],
    totalamount:0,
    addItem:()=>{},
    removeItem:()=>{},
})

export default CartContent;