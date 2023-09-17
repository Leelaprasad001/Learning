import React, { Component } from 'react'
// import RegularComponent from './RegularComponent'
// import Purecomponent from './Purecomponent'
import Memo from './Memo'

class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'leela'
        }
        // this.greetParent = this.greetParent.bind(this)
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:'leela'
            })
        }, 2000)
    }

  render() {
    console.log('*********parent component*********')

    return (
      <div>
        parent Component
        {/* <RegularComponent name={this.state.name} /> */}
        {/* <Purecomponent name={this.state.name} /> */}
        <Memo name={this.state.name} />
        
      </div>
    )
  }
}

export default ParentComponent
