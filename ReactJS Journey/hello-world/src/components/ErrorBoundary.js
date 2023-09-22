import React, { Component } from 'react'


export class ErrorBoundary extends Component {

    constructor(props) {
        super(props)

        this.state = {
            hasError:false
        }
    }

    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error)
        console.log(info)
    }

  render() {
   if(this.state.hasError){
       return <h1>Something went wrong</h1>
   }
    return this.props.children
  }
}

export default ErrorBoundary


//getDerivedStateFromError(error) is a lifecycle method which is used to catch the error and return the state
//hasError:true is used to update the state
//this.props.children is used to render the child component
//this.state.hasError is used to check the state and if it is true then it will return the error message
//if it is false then it will return the child component
//this is how we can use error boundary to catch the error and display the error message instead of the whole component
//ErrorBoundary.js is used to catch the error and display the error message
//componentDidCatch(error,info) is used to catch the error and display the error message
