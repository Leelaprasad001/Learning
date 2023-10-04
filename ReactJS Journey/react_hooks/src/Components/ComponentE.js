import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} {channel}
            <ComponentF />
        </div>
    )
}

export default ComponentE


//using muliple context in a single component with using useContext hook
//useContext hook is used to consume the context value in the component