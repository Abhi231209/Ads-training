import React from 'react'

function Withmemo(props) {
    console.log('Withmemo is called')
    
  return (
    <div>
        {props.value?'value is true':''}
    </div>
  )
}

export default React.memo(Withmemo);