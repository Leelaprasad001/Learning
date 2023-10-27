import React,{useReducer} from 'react'

const initialstate = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialstate
        default:
            return state
    }
}

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialstate)
    const [counttwo, dispatchtwo] = useReducer(reducer, initialstate)
  return (
    <div>
        <div>count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>

        <div>
            <div>countTwo - {counttwo}</div>
            <button onClick={() => dispatchtwo('increment')}>Increment</button>
            <button onClick={() => dispatchtwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchtwo('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default CounterThree

//using multiple use reducer we can use same state for different independently
