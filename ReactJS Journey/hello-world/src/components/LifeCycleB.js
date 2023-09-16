import React, { Component } from 'react'

class LifecycleB extends Component {

    // 1st method
    constructor(props) {
      super(props)
    
      this.state = {
        name: 'leela'
      }
      console.log('LifecycleB constructor')
    }

    // 2nd method
    static getDerivedStateFromProps(props, state) {
      console.log('LifecycleB getDerivedStateFromProps')
      return null
    }

    // 4th method
    componentDidMount() {
      console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
      }
  
      getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
      }
  
      componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
      }

  render() {
    console.log('LifecycleB render')
    return (
      <div>
        <div>LifecycleB</div>
      </div>
    )
  }
}

export default LifecycleB


// Lifecycle methods are the methods which are invoked at different phases of the component's lifecycle
// There are 4 phases of the component's lifecycle
// 1. Mounting - when an instance of a component is being created and inserted into the DOM 
//      - constructor, static getDerivedStateFromProps, render, componentDidMount
//      - constructor is the only place where we can assign state directly without using setState
//      - static getDerivedStateFromProps is used when the state of the component depends on changes in props over time
//      - render is the only required method in a class component
//      - componentDidMount is invoked immediately after a component and all its children components have been rendered to the DOM


// 2. Updating - when a component is being re-rendered as a result of changes to either its props or state 
//      - static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate
//      - static getDerivedStateFromProps is used when the state of the component depends on changes in props over time
//      - shouldComponentUpdate is used to let React know if a component's output is not affected by the current change in state or props
//      - getSnapshotBeforeUpdate is used to capture some information from the DOM before it is potentially changed
//      - componentDidUpdate is invoked immediately after updating occurs

// 3. Unmounting - when a component is being removed from the DOM 
//      - componentWillUnmount
//      - componentWillUnmount is invoked immediately before a component is unmounted and destroyed

// 4. Error Handling - when there is an error during rendering, in a lifecycle method, or in the constructor of any child component 
//      - static getDerivedStateFromError, componentDidCatch
//      - static getDerivedStateFromError is used to render a fallback UI after an error is thrown
//      - componentDidCatch is used to log the error information
