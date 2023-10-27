import React, {useContext} from 'react'
import { CountContext } from '../App' 

function CompA() {
    const countContext = useContext(CountContext)
  return (
    <div>
        CompA
        <button onClick={() => countContext.countdispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countdispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countdispatch('reset')}>Reset</button>
    </div>
  )
}

export default CompA


//usereducer between components global state management
//by combining usereducer + usecontext