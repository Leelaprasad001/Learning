import React, { Component } from 'react'

export class UserGreetings extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }

  render() {

    //approach-1 element wise
    // let message
    // if(this.state.isLoggedIn){
    //     message = <div>Welcome Leela</div>
    // }
    // else{
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    //approach-2 direct return
    // if(this.state.isLoggedIn){
    //     return <div>Welcome Leela</div>

    // }else{
    //     return <div>Welcome Guest</div>
    // }   

    //approach-3  ternary operator
    // return(
    //     this.state.isLoggedIn ?
    //     <div>Welcome Leela</div> :
    //     <div>Welcome Guest</div>
    // )

    //approach-4 short circuit operator  firstexpression && secondexpression and firstexpression is evaluated if it is true then secondexpression is evaluated
    return this.state.isLoggedIn && <div>Welcome Leela</div>
    
  }
}

export default UserGreetings
