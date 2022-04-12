import React from "react";
import classes from "./Cart.module.css";
import Modal from '../UI/Modal'

export default function Cart(props) {
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {[{ id: 1, name: "sushi", amount: 2, price: 13.0 }].map((elem) => {
        return <li>{elem.name}</li>;
      })}
    </ul>
  );
  return (
    <>
      <Modal onclose={props.onclose}>
        {cartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>26.00</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onclose}>Close</button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </>
  );
}
