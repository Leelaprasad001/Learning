import React, { Component } from 'react'
import HigherOrderFun from './HigherOrderFun'

export class HoverCounter extends Component {

  render() {
    // const {count} = this.state
    
    const {count, incrementCount} = this.props
    return <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
  }
}

export default HigherOrderFun(HoverCounter, 10)