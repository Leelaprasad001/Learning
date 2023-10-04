import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }


    render() {
        return <h1>{this.state.count}</h1>
    }
}

export default IntervalClassCounter


//using componentdidmount and componentwillunmount to clear the interval and prevent memory leaks
//using componentdidmount we can start the interval and using componentwillunmount we can clear the interval
//tick method is used to increment the count by 1