import React from 'react'

function Toimportname(props) {
    console.log('Toimportname is called')
    
  return (
    <div>
        {props.value?'value is true':''}
    </div>
  )
}

export default Toimportname