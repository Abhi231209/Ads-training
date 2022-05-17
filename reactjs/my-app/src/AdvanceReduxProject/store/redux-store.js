import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./cart-slice";
import cartupdate from './cart-update'

const store=configureStore({
    reducer: {cartViewReducer : cartslice.reducer, cartUpdate:cartupdate.reducer}
})

export default store