import React from 'react'
import classes from './Header.module.css'
import Mealimage from '../../Images/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

export default function Header(props) {
  return (
    <>
      <header className={classes.header}>
          <h1>FoodOrderApp</h1>
          <HeaderCartButton onShowCart={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
          <img src={Mealimage} alt="Here is a meal image"/>
      </div>
    </>
  )
}
