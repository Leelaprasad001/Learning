import React, {useState} from 'react'

function HookCounter() {
    
    const [count, setCount] = useState(0)

    return (
        <div>
        <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter


//useState is a Hook that lets you add React state to function components. It accepts a single argument, which is the initial state, and returns an array of two values: the current state and a function that updates it.
//useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
//useState declares a “state variable”. Our variable is called count but we could call it anything else, like banana. This is a way to “preserve” some values between the function calls — useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React.
