import { createSlice } from "@reduxjs/toolkit";

const state={cartView:true}

const cartslice=createSlice({
    name:'cart',
    initialState:state,
    reducers:{
        toggle(state){
            state.cartView=!state.cartView
        }
    }
})

export const cartactions= cartslice.actions;
export default cartslice;