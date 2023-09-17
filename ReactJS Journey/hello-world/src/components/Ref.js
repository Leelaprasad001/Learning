import React, { Component } from 'react'


class Ref extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
        this.cbref = null;
        this.setCbRef = (element) => {
            this.cbref = element
        }
    }

    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.cbref){
            this.cbref.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
        alert(this.cbref.value)
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default Ref


// Refs are used to access the DOM nodes or elements in the react
// Refs are used to focus the input elements
// Refs are used to trigger the animations
// Refs are used to integrate with third party DOM libraries
// Refs are used to get the values from the input elements
// Refs are used to get the values from the child components
// Callback refs are used to get the values from the child components
