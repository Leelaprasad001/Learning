import React from 'react'

function columns() {
    // const items = []
  return (
    // <React.Fragment>
        //we can use empty tag instead of React.Fragment
        <>



        {/* we can allows use key attribute in React.Fragment */}

        {/* {
            items.map(item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        } */}



        <td>name</td>
        <td>leela</td>
        </>
    // </React.Fragment>
  )
}

export default columns
