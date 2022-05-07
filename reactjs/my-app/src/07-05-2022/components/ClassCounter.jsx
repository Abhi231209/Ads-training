import React from 'react'
import classes from './Counter.module.css';
import {useSelector,useDispatch,connect} from 'react-redux'

class ClassCounter extends React.Component{
    increment(){
      this.props.increment()
    }
    decrement(){
      this.props.decrement()
    }
    render(){
      return(
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{this.props.counter}</div>
          <div>
            <button onClick={this.increment.bind(this)}>increment</button>
            <button onClick={this.decrement.bind(this)}>decrement</button>
          </div>
          <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
        </main>
      )
    }
  }
  const statesitrate=(state)=>{
    return {
      counter:state.counter
    }
  }
  const dispatchfunc=(dispatch)=>{
    return {
      increment:()=> dispatch({type:'increment'}),
      decrement:()=> dispatch({type:'decrement'})
    }
  }
  export default connect(statesitrate,dispatchfunc)(ClassCounter);