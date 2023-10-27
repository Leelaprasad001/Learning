import React,{useReducer} from 'react'

const initialstate = {
    firstcounter: 0,
    secondcounter: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment':
            return { ...state, firstcounter: state.firstcounter + action.value}
        case 'decrement':
            return { ...state, firstcounter: state.firstcounter - action.value}
        case 'increment2':
            return { ...state, secondcounter: state.secondcounter + action.value}
        case 'decrement2':
            return { ...state, secondcounter: state.secondcounter - action.value}
        case 'reset':
            return initialstate
        default:
            return state
    }
}

function CounterTwo() {

    const [count, dispatch] = useReducer(reducer, initialstate)

  return (
    <div>
        <div>first count - {count.firstcounter}</div>
        <div>second counter - {count.secondcounter}</div>
        <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
        <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment-5</button>
        <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement-5</button>
        <div>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment counter2</button>
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement counter2</button>
        </div>
        <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default CounterTwo


//making us of action as an objcet we can use additional function as we observed like 
//different buttons
//we can also use multiple useReducer in a single component
//we can also use useReducer with useContext
//we can also use useReducer with useCallBack
