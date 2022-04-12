import React from 'react'
import classes from './Input.module.css'

export default function Input(props) {
  return (
    <div className={classes.input}>
        <lable htmlFor={props.input.id}>{props.label}</lable>
        <input {...props.input}></input>
    </div>
  )
}
