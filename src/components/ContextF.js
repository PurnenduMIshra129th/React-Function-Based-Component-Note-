import React from 'react'
import {UserContext,ChannelContext} from '../App'

function ContextF() {
  return (
    <div>
        <UserContext.Consumer>
            {
                User =>{
                    return(
                        <ChannelContext.Consumer>
                    {
                        Channel=>{
                            return(<div>
                                Channel Context Value {Channel},User Context Value {User}
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

export default ContextF