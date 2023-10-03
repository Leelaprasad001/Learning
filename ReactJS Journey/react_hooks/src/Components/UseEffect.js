import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
        
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>click {count} times</button>
        </div> 
    )
}

export default UseEffect


//useEffect Hook lets you perform side effects in function components:
//Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
//The Effect Hook lets you perform side effects in function components:
//useEffect runs after every render of the component
//useEffect is a Hook that lets you use side effects in functional components.
//useEffect is similar to componentDidMount and componentDidUpdate
//useEffect takes a function that contains imperative, possibly effectful code.
