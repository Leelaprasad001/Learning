import React, { Component} from 'react';
// import logo from './logo.svg';
import './App.css';
// import  Greet from './components/Greet'
// import  Welcome from './components/Welcome'
// import Hello from './components/hello'
// import Message from './components/message'
// import Counter from './components/counter'
// import FunctionClick from './components/funclick'
// import ClassClick from './components/classclick'
// import EventBlind from './components/EventBlind'
// import ParentComponent from './components/parentcomp'
// import UserGreetings from './components/UserGreetings'
// import NameList from './components/NameList'
// import Stylesheet from './components/Stylesheet'
// import Inline from './components/Inline'
// import './appStyle.css'
// import styles from './appStyle.module.css'
// import Form from './components/Form'
// import LifecycleA from './components/LifecycleA'
// import Fragment from './components/Fragment'
// import Table from './components/Table';
// import Purecomponent from './components/Purecomponent';
import ParentComponent from './components/ParentComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <Counter /> */}

        {/* <Message /> */}

        {/* <Greet name="leela" heroName="Ironman"> <p>hello how are you</p> </Greet> */}
        {/* <Greet name="prasad" heroName="spiderman">  <button>action</button> </Greet> */}
        {/* <Greet name="bantu" heroName="Thanos" /> */}

        {/* <Welcome name="leela" heroName="Ironman"/> */}
        {/* <Welcome name="prasad" heroName="spiderman"/>  */}
        {/* <Welcome  name="bantu" heroName="Thanos"/>  */}
        {/* <Hello /> */}

        {/* <FunctionClick /> */}
        {/* <ClassClick />*/}

        {/* <EventBlind /> */}

        {/* <ParentComponent /> */}

        {/* <UserGreetings /> */}

        {/* <NameList /> */}

        {/* <Stylesheet primary= {true} /> */}

        {/* <Inline /> */}


        {/* using normal appStyle.css we can use styles in all children components like above mentioned inline, namelist components and there may be conflict among the same classnames
        but by using appStyles.module.css we can use only in parent and can't be used in child component*/}

        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success</h1> */}

        {/* <Form /> */}

        {/* <LifecycleA />*/}

        {/* <Fragment/> */}

        {/* <Table /> */}

        {/* <Purecomponent /> */}

        <ParentComponent />
        
      </div>
    );
  }
}

export default App;
