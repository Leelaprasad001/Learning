import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
  return (
    <div>
        <UserContext.Consumer>
            {
            user => {
                return (
                    <ChannelContext.Consumer>
                        {
                        channel => {
                            return (
                                <div>
                                    {user} {channel}
                                </div>
                            )
                        }
                        }
                    </ChannelContext.Consumer>
                )
            }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default ComponentF


//using muliple context in a single component without using useContext hook