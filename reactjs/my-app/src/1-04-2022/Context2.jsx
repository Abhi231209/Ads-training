import React from 'react'
import { Newcont } from './Context'

function Context2() {
  // const user = useContext(Newcont);
  return (
    <Newcont.Consumer>
      {(val) => <h1>{val}</h1>} 
    </Newcont.Consumer>
  );
}

export default Context2