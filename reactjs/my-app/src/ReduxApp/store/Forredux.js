import {  configureStore } from '@reduxjs/toolkit';
import slice from "./Counter"
import authSlice from './Auth'


const store = configureStore({
  reducer: {counter: slice.reducer ,auth:authSlice.reducer }
});



export default store;