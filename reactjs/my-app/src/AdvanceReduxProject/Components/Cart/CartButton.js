import classes from './CartButton.module.css';
import {cartactions} from '../../store/cart-slice'
import { useDispatch ,useSelector} from 'react-redux';

const CartButton = (props) => {
  const dispatch =useDispatch()
  const totalQuantity=useSelector((state)=>state.cartUpdate.totalQuantity)
  const handelView =()=>{
    dispatch(cartactions.toggle())
  }
  return (
    <button className={classes.button} onClick={handelView}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
