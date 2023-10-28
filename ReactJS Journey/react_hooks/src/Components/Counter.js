import React, {useState, useMemo} from 'react'

function Counter() {
    const[counterOne, setCounterOne] = useState(0)
    const[counterTwo, setCounterTwo] = useState(0)

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
            let i = 0
            while(i < 2000000000) i++
            return counterOne % 2 === 0
        },[counterOne])
    
  return (
    <div>
        <div>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven ? 'Even' : 'odd'}</span>
        </div>
        <div>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    </div>
  )
}

export default Counter

//conter one is slow but counter two aslo becomes slow it is not good it should be independent
//so we use useMemo hook , it is hook only recomputes cast values only it dependecies is changed 