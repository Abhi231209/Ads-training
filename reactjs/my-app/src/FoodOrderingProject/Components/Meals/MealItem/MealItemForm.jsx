import React from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
export default function MealItemForm(props) {
  return (
    <div>
        <form className={classes.form}>
            <Input label='Amount' input={{
                id:'amount_'+ props.id,
                type:'number',
                defaultValue:'1',
                min:'1',
                max:'5',
                step:'1'
            }}/>
            <button>+Add</button>
        </form>
    </div>
  )
}
