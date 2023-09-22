import React, { Component } from 'react'

export class User extends Component {
  render() {
    return (
      <div>
        {/* {this.props.name(true)} */}
        {this.props.render(false)}

      </div>
    )
  }
}

export default User


//using render props we can reuse the code like higher order components
//here we rae passing an argumentto the props and based on that we are returning the value
//The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.