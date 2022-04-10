import React,{useState} from 'react'
import Context2 from './Context2';

export const Newcont=React.createContext()
function Context() {
  
    return (
      <Newcont.Provider value="abhishek">
      <Context2/>
    </Newcont.Provider>
    );
  }

export default Context
