
import classes from './Modal.module.css'
import React from 'react'
import  ReactDOM  from 'react-dom'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onclose}/>
}

const ModalOverly=(props)=>{
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
} 


const portalElement=document.getElementById('overlay')
export default function Modal(props) {
  return (
    <>
       {ReactDOM.createPortal(<Backdrop onclose={props.onclose}/>,portalElement)}
       {ReactDOM.createPortal(<ModalOverly>{props.children}</ModalOverly>,portalElement)}
    </>
  )
}
