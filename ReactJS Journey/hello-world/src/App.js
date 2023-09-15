import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import  Greet from './components/Greet'
import  Welcome from './components/Welcome'
import Hello from './components/hello'
import Message from './components/message'
import Counter from './components/counter'
import FunctionClick from './components/funclick'
import ClassClick from './components/classclick'
import EventBlind from './components/EventBlind'
import ParentComponent from './components/parentcomp'


class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <Counter /> */}

        {/* <Message /> */}

        {/* <Greet name="leela" heroName="Ironman"> <p>hello how are you</p> </Greet> */}
        {/* <Greet name="prasad" heroName="spiderman">  <button>action</button> </Greet>
        <Greet name="bantu" heroName="Thanos" />

        <Welcome name="leela" heroName="Ironman"/>
        <Welcome name="prasad" heroName="spiderman"/> */}
        {/* <Welcome  name="bantu" heroName="Thanos"/>  */}
        {/* <Hello /> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick />*/}

        {/* <EventBlind /> */}

        <ParentComponent />

      </div>
    );
  }
}

export default App;
