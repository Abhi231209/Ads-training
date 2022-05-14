import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/Counter';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.show);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const increase = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: 10 }
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  const toggle = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={increase}>Increase by 10</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={toggle}>Toggle Counter</button>
    </main>
  );
};


export default Counter

