import React from "react";

const HigherOrderFun = (WrappedComponent, incrementNumber) => {

    class HigherOrderFun extends React.Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber}
            })
        }
    
        render() {
        console.log(this.props.name)
        return <WrappedComponent count={this.state.count} incrementCount={this.incrementCount}  {...this.props}/>;
        }
    }
    return HigherOrderFun;

    }

export default HigherOrderFun;



//Higher Order Components (HOC)
//These are the components that take a component as an argument and return a new component.
//That new component is called Enhanced Component
//const NewComponent = higherOrderComponent(originalComponent)
//Usually Used for Code Reuse, Logic and Bootstraping
//Example: ClickCounter.js and HoverCounter.js
// Are the same except for the name of the component and the event handler
// So we can create a HOC to reuse the code
// Create a new file with the name HOC.js
//when we use props in the HOC we can pass it as props to the original component(HigherOrderFun.js) 
//we have to use spread operator to pass the props to the original component for that we have to use {...this.props}
//passing parameter to the HOC is done by passing it to the original component for that we have to use {...this.props} 
