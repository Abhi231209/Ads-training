import { useContext, useState } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [submited, setSubmited] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const handelorder = async (allitems) => {
    setCheckout(true);
  };
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  const submitdata = (userdata) => {
    fetch("https://movies-list-4cd19-default-rtdb.firebaseio.com/order.json", {
      method: "POST",
      body: JSON.stringify({
        users: userdata,
        items: cartCtx.items,
      }),
    });

    setSubmited(true);
    cartCtx.clearCartItems();
  };

  const buttons = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={handelorder}>
          Order
        </button>
      )}
    </div>
  );
  const aftersubmit = (
    <>
      <p>Order is submited</p>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  const beforesubmit = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && <Checkout onSubmit={submitdata} onClose={props.onClose} />}
      {!checkout && buttons}
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {submited ? aftersubmit : beforesubmit}
    </Modal>
  );
};

export default Cart;
