const redux=require('redux')

const reducefunc=(state={counter:1},action)=>{
return {
    counter: state.counter+1
}
}

const store= redux.createStore(reducefunc)


const countersubscriber=()=>{
    const updatestate= store.getState();
    console.log(updatestate)
}

store.subscribe(countersubscriber)
store.dispatch({type: 'increment'})