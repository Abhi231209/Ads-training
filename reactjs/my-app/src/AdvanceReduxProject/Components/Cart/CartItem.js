import classes from './CartItem.module.css';
import {cartUpdateAction} from '../../store/cart-update'
import { useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch=useDispatch()

 const handelAddItem=()=>{
dispatch(cartUpdateAction.additems({
  id,
  title,
  quantity,
  total,
  price
}))
 }
 const handelRemoveItem=()=>{
dispatch(cartUpdateAction.removeitems(id))
 }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handelRemoveItem}>-</button>
          <button onClick={handelAddItem}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
