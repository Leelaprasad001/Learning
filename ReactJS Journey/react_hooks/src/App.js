import React from 'react';
import './App.css';
// import ClassCounter from './Components/ClassCounter';
// import HookCounter from './Components/HookCounter';
// import HookCounter2 from './Components/HookCounter2';
// import HookCounter3 from './Components/HookCounter3';
// import HookCounter4 from './Components/HookCounter4';
// import ClassCounter1 from './Components/ClassCounter1';
// import UseEffect from './Components/UseEffect';
// import ClassMouse from './Components/ClassMouse';
// import HookMouse from './Components/HookMouse';
// import MouseContainer from './Components/MouseContainer';
// import IntervalClassCounter from './Components/IntervalClassCounter';
// import InternalHookCounter from './Components/InternalHookCounter';
// import Datafetching from './Components/Datafetching';
import ComponentC from './Components/ComponentC';

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">

{/* React Hooks/ */}
      {/* <ClassCounter /> */}

{/* usestate hook */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookCounter3 /> */}
      {/* <HookCounter4 /> */}

{/* useEffect hook  there is an flow execution of useEffect hook with each problem arised in class that is solved by useEffect hook */}
      {/* <ClassCounter1 /> */}
      {/* <UseEffect /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      {/* <IntervalClassCounter /> */}
      {/* <InternalHookCounter /> */}
      {/* <Datafetching /> */}

{/* useContext hook  */}
      <UserContext.Provider value={'Leela Prasad'}>
        <ChannelContext.Provider value={'Bantu'}>
       
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>

    </div>
  );
}

export default App;









//React Hooks are a new feature in React 16.8 that lets you use state and other React features without writing a class.
//Hooks are backwards-compatible. This means that they don’t contain any breaking changes.
//Hooks don’t work inside classes — they let you use React without classes.
//Hooks are completely opt-in — there’s no need to rewrite existing components.
//Hooks don’t replace your knowledge of React concepts. Instead, Hooks provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle.
//As we will see later, Hooks also offer a new powerful way to combine them called composition.
//Hooks are JavaScript functions, but they impose two additional rules:
//Only call Hooks at the top level. Don’t call Hooks inside loops, conditions, or nested functions.
//Only call Hooks from React function components. Don’t call Hooks from regular JavaScript functions. (There is just one other valid place to call Hooks — your own custom Hooks. We’ll learn about them in a moment.)
//React provides a few built-in Hooks like useState. You can also create your own Hooks to reuse stateful behavior between different components. We’ll look at the built-in Hooks first.
//Hooks are a way to reuse stateful logic, not state itself. In fact, Hooks useState and useEffect don’t even have to come from a React or a third-party library. You can definitely write custom Hooks that maintain their own state.
//Hooks are a more direct way to use the React features you already know — such as state, lifecycle, context, and refs. They don’t fundamentally change how React works, and your knowledge of components, props, and top-down data flow is just as relevant. Hooks offer a more direct API to the React concepts you already know without introducing anything new.