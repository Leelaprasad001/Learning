import React, {useState, useEffect} from 'react'

function UseEffect() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    }, [count])
        
    
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
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


//conditionally firing an effect - you can tell React to skip applying an effect if certain values haven’t changed between re-renders. To do so, pass an array as an optional second argument to useEffect:
//useEffect(() => {
//    document.title = `You clicked ${count} times`
//}, [count]) // Only re-run the effect if count changes

