import React, { Component } from 'react'

class RegularComponent extends Component {
  render() {
    console.log('*********regular component*********')
    return (
      <div>
        Regular Component {this.props.name}
      </div>
    )
  }
}

export default RegularComponent
