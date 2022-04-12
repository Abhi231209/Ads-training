import React ,{useContext} from "react";
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContent from '../../store/cart-content'

export default function HeaderCartButton(props) {
  const contx = useContext(CartContent)
  const numberOfCartItem = contx.items.reduce((curnumb,item)=>{
      return curnumb+item.amount
  },0)
  return (
    <>
    <button className={classes.button} onClick={props.onShowCart}>
      <span className={classes.icon}>
          <CartIcon/>
        </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
      
    </>
  );
}
