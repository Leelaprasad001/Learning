import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './Context'

export class ComponentE extends Component {

static contextType = UserContext
  render() {
    return (
      <div>
        Component E context {this.context}
        <ComponentF />
      </div>
    )
  }
}

// ComponentE.contextType = UserContext

export default ComponentE
