import React, {useState} from 'react'

function HookCounter3() {

    const [name, setName] = useState({firstName: '', lastName: ''})
    
    return (
        <form>
            <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />

            <h2>Your first name is - {name.firstName}</h2>
            <h2>Your last name is - {name.lastName}</h2>

            <h2>{JSON.stringify(name)}</h2>
        </form>
    )
}

export default HookCounter3


//usestate hook doesn't automatically merge and update the object properties
//so we have to do it manually
//we can use multiple usestate hooks to manage multiple state variables
//but if we have to manage multiple related state variables then we can use usestate hook with objects and arrays
//in this example we have an object with two properties firstName and lastName
//we have a single state variable called name
//we have a single handler function called setName
//we have used spread operator (...) to spread out the properties of the object and then overriding the property we want to change
//spread operator is used to make a copy of the object and then we can change the property we want to change