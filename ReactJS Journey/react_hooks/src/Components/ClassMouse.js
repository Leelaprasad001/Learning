import React, { Component } from 'react'

export class ClassMouse extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             x: 0,
             y: 0
        }
    }
    
    logMousePosition = e => {
        this.setState({x: e.clientX, y: e.clientY})
    }
    
    componentDidMount() {
        window.addEventListener('mousemove', this.logMousePosition)
    }
    
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }
    render() {
        return (
        <div>
            X - {this.state.x} Y - {this.state.y}
        </div>
        )
    }
}

export default ClassMouse


//useEffect with cleanup - useEffect runs after every render of the component
//Mouse logMousePosition is called every time the mouse is moved e.clientX and e.clientY are the coordinates of the mouse 
// they are set to the state x and y when the mouse is moved