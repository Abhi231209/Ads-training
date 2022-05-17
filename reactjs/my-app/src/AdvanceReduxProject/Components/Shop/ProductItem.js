import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {cartUpdateAction} from  '../../store/cart-update'
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const { title, price, description ,id } = props;
  console.log(id)
  const dispatch=useDispatch()
const handelAdditems=()=>{
dispatch(cartUpdateAction.additems({
  id,
  price,
  title,
  description
}))
}
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={handelAdditems}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
