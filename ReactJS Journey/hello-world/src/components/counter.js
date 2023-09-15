import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0   
        }
    }

    increment() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('callback value', this.state.count)}) // callback function used fro asynchronous call

        this.setState(prevState => ({
            count: prevState.count + 1
        })) // use this when you have to update state based on previous state
       console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;