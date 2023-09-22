import React, { Component } from 'react'
import HigherOrderFun from './HigherOrderFun'

export class ClickCounter extends Component {

    
  render() {
    // const {count} = this.state
    const {count, incrementCount} = this.props
    
    return <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
    
  }
}

export default HigherOrderFun(ClickCounter, 5)


 