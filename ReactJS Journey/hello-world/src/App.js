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
// import ParentComponent from './components/ParentComponent';
// import Ref from './components/Ref';
// import Focusinput from './components/Focusinput';
// import FRParentInput from './components/FRParentInput';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounterTwo from './components/ClickCounterTwo';
// import HoverCounterTwo from './components/HoverCounterTwo';
// // import User from './components/User';
// import RenderProps from './components/RenderProps';
// import ComponentC from './components/ComponentC';
// import { UserProvider } from './components/Context';
// import Axions from './components/Axions';
// import AxionsPost from './components/AxionsPost';


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

        {/* <ParentComponent /> */}
        
        {/* <Ref /> */}

        {/* <Focusinput /> */}

        {/* <FRParentInput /> */}

{/* use of portals in reactjs like in index.html we have div with id="portal-root" and in index.js we have portal code */}
        {/* <PortalDemo /> */}


{/* For Error handling we use ErrorBoundary component */}
        {/* <ErrorBoundary>
          <Hero heroName="Batman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="Superman" />
        </ErrorBoundary>

        <ErrorBoundary>
          <Hero heroName="joker" />
        </ErrorBoundary> */}



 {/* code reusability using HOC and render props */}
        {/* Higher Order Components */}

        {/* <ClickCounter name="leela"/> 
        <HoverCounter /> */}

          {/* render props */}

          {/* <ClickCounterTwo />
          <HoverCounterTwo />
          <User render={(isLoggedIn) => isLoggedIn ? 'leela' : 'Guest'}/>  */}

          {/* <RenderProps render={(count, incrementCount) => <ClickCounterTwo count={count} incrementCount={incrementCount} />} />
          <RenderProps render={(count, incrementCount) => <HoverCounterTwo count={count} incrementCount={incrementCount} />} /> */}

  {/* context API */}
    {/* <UserProvider value="leela">
       <ComponentC />
    </UserProvider> */}

  {/* React and HTTP , axios*/}
         {/* <Axions />  */}
          {/* <AxionsPost /> */}
      </div>
    );
  }
}

export default App;
