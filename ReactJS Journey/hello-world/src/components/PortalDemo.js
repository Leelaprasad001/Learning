import React from 'react'
import  ReactDOM  from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
   
      <h1>Portal Heading</h1>,

    document.getElementById('portal-root')
  )
}

export default PortalDemo

//React portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
//ReactDom.createPortal(child, container)
//The first argument(child) is any renderable React child, such as an element, string, or fragment. The second argument(container) is a DOM element.
//The portal element is inserted in the DOM tree after the <h1> element, but before the sibling <p> element.
//Even though a portal can be anywhere in the DOM tree, it behaves like a normal React child in every other way. Features like context work exactly the same regardless of whether the child is a portal, as the portal still exists in the React tree regardless of position in the DOM tree.
//This is why finding child DOM nodes, context, refs, or event handlers on a child node will work as if the child was directly rendered by the parent.
