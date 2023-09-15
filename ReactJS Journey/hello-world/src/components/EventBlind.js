import React, { Component } from 'react'

class EventBlind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        //approach-1 best approach
        // this.clickHandler = this.clickHandler.bind(this)
    }

    //using normal function  //approach-2
    // clickHandler() {  
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

    //using arrow functions  //approach-3
    // clickHandler = () => {  
    //     this.setState({
    //         message: 'Goodbye!'
    //     })
    //     console.log(this)
    // }

     //approach-4
    clickHandler = () => { 
        this.setState({
            message: 'Goodbye!'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBlind
