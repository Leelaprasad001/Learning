import React, {useState, useEffect} from 'react'

function InternalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    
    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])
     
    return <h1>{count}</h1>
}

export default InternalHookCounter


//it is possible to use multiple useEffect in a single component
// useEffect(() => {
//     document.title = `You clicked ${count} times`
// }, [count])
//
// useEffect(() => {
//     window.addEventListener('mousemove', logMousePosition)
// }, [])
//
// const logMousePosition = e => {
//     console.log('Mouse event')
//     setX(e.clientX)
//     setY(e.clientY)
// }
//
// return (
//     <div>
//         Hooks X - {x} Y - {y}
//     </div>
// )
//
