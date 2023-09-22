import React, { Component } from 'react'

export class RenderProps extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

  render() {
    return (
      <div>
         {this.props.render(this.state.count, this.incrementCount)}
      </div>
    )
  }
}

export default RenderProps


//The render prop is a function prop that a component uses to know what to render.
//components with render props take a function that returns a react element and calls it instead of implementing their own render logic.
//common code is shared between components using render props