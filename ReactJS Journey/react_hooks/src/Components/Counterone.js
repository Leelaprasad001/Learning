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

function Counterone() {

    const [count, dispatch] = useReducer(reducer, initialstate)

  return (
    <div>
        <div>count - {count}</div>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Counterone


//react useReducer is used to manage states in react
//it use reducer function as above 