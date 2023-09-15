import React, { Component} from "react";    

class Welcome extends Component {   
    render() {    
        const {name,heroName} = this.props
        // const {state1,state2} = this.state
        return <h1>Welcome {name} and {heroName}</h1>     //accessing props using this keyword;    
    }    
}

export default Welcome;


//class component