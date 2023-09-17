import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {

  constructor(props) {  
    super(props)
  
    this.inputRef = React.createRef()
  }

  clickHandler = () => {
    this.inputRef.current.focus()
  }

  render() {
    return (
      <div>
        <FRInput ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput


//above code is for the forwarding the ref from the parent component to the child component
//in the above code we are creating the ref in the parent component and passing it to the child component
//in the child component we are passing the ref to the input element
//in the parent component we are creating the ref using the createRef() method
//in the child component we are using the forwardRef() method

