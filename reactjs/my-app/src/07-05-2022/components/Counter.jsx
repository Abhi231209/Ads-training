import React from 'react'
import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch=useDispatch()
  const counter=useSelector(state => state.counter)
  const toggleCounterHandler = () => {
    dispatch({type:'increment', amount : 3 })
  };
  const increment=()=>{
    dispatch({type:"increment"})
  }
  const decrement=()=>{
    dispatch({type:"decrement"}) 
  }
  const increase=()=>{
    dispatch({type:'increase',amount: 10})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={increase}>increase by 10</button>

      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter

