import React, { PureComponent } from 'react'

//pure component implements shouldComponentUpdate with shallow props and state comparison
//pure component does not re-render if props and state are same
//pure component does shallow comparison of props and state
//pure component does not do deep comparison of props and state


export class Purecomponent extends PureComponent { 
  render() {
    console.log('*********pure component*********')
    return (
      <div>
        Pure Component {this.props.name}
      </div>
    )
  }
}

export default Purecomponent
