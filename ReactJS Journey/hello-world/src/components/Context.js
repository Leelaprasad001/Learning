import React from "react";

const UserContext = React.createContext('default value- leela');

const UserProvider = UserContext.Provider;

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;


//context API provides a way to pass data through the component tree without having to pass props down manually at every level.
//heirarchy is like this:
//App.js -> ComponentC -> ComponentE -> ComponentF
//steps to use context API:
//1. create a context Method is React.createContext()
//2. provide a context value Method is Context.Provider
//3. consume the context value method is Context.Consumer

//can be wrapped in app.js and give value to it and then can be used in any component
//can be consumed in componentF.js using Context.Consumer
//also we can add default value to context like this:
//const UserContext = React.createContext('default value')
//and then can be used in componentF.js and in app.js we dont need to wrap it in UserProvider
//default value can be used when we dont have any provider in heirarchy only
//we can also consume context value in class component using static contextType
//two limitations of context API:
//1. context is designed to share data that can be considered global for a tree of React components, such as the current authenticated user, theme, or preferred language.
//2. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.
