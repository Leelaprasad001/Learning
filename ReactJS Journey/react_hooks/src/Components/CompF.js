import React, {useContext} from 'react'
import { CountContext } from '../App' 

function CompF() {
    const countContext = useContext(CountContext)
  return (
    <div>
        CompF
        <button onClick={() => countContext.countdispatch('increment')}>Increment</button>
        <button onClick={() => countContext.countdispatch('decrement')}>Decrement</button>
        <button onClick={() => countContext.countdispatch('reset')}>Reset</button>
    </div>
  )
}

export default CompF