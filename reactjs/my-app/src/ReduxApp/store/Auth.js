import { createSlice } from '@reduxjs/toolkit';

const states={isAuth:false}
const authSlice=createSlice({
  name :"auth",
  initialState:states,
  reducers:{
    login(state){
      state.isAuth=true
    },
    logout(state){
      state.isAuth=false
    }
  }
})

export const authactions=authSlice.actions

export default authSlice