import React from 'react'

// function Greet() {
//     return <h1>Hello Leela</h1>
// }

const Greet = props => {
    // console.log(props)
    const {name,heroName} = props
    return(
       <div>
            <h1>
                Hello {name} he is {heroName}
            </h1>
            {props.children}
       </div>
    ) 
}

export default Greet


//functional component