import React from 'react'

function Fragment() {
  return (
    <React.Fragment>
        <h1>
        Fragment Demo
        </h1>
        <p>Hello leela</p>
    </React.Fragment>
  )
}

export default Fragment


// A fragment is a way to group a list of children without adding extra nodes to the DOM.
// React.Fragment is a component that returns its children.
// It can be used anywhere a component could be used.
// React.Fragment does not support keys or attributes.
// React.Fragment does not support the shorthand <></> syntax for fragments.
// React.Fragment is a built-in component that allows us to group list of children without adding extra nodes to the DOM.
// React.Fragment does not support keys or attributes.
