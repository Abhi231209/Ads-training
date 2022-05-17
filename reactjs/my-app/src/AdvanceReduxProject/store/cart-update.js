import { createSlice } from "@reduxjs/toolkit";


const cartupdate=createSlice({
name:'cartupdate',
initialState:{
    items:[],
    totalQuantity:0,
},
reducers:{
    additems(state,action){
        const item=action.payload
        console.log(item,'this is  item')
        const existingitem=state.items.find((product)=>product.id===item.id)
        console.log(existingitem,'this is existing item')
        state.totalQuantity++
        if(!existingitem){
          state.items.push({
              id:item.id,
              title:item.title,
              description:item.description,
              price:item.price,
              quantity:1,
              totalprice:item.price
          })
        }else{
            existingitem.quantity++
            existingitem.totalprice=existingitem.totalprice+item.price
        }

    },
    removeitems(state,action){
        const id=action.payload
        state.totalQuantity--
        const existingitem=state.items.find((product)=>product.id===id)
        if(existingitem===1){
            state.items=state.items.find((product)=>product.id!==id)
        }else{
            existingitem.quantity--
            existingitem.totalprice=existingitem.totalprice-existingitem.price
        }
    }
}
})

export const cartUpdateAction =cartupdate.actions

export default cartupdate