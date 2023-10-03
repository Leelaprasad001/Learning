import React, {useState} from 'react'

function HookCounter4() {
    const [items, setItems] = useState([])

    const additem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    
    return (
        <div>
            <ul>
                <button onClick={additem}>Add a number</button>

                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default HookCounter4


//usestate with arrays
//here using spread operator to copy the array and then add the new item to the array
//here we are adding a number to the array
//here we are adding a random number to the array from 1 to 10