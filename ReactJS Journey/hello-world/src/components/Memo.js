import React from 'react'

function Memo({name}) {
    console.log('memo')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Memo)


//memo is a higher order component which is used to prevent unnecessary rendering of components
//memo is used to prevent the unnecessary rendering of functional components
//memo is similar to purecomponent but using function not class using React.memo
//React.memo has two arguments one is functional component and another is function which is used to compare the previous props and current props
