import React,{useContext} from 'react'
import ContextF from './ContextF'
import { UserContext,ChannelContext } from '../App'


function ContextE() {
    const User = useContext(UserContext)
    const Channel = useContext(ChannelContext)
  return (
    <div>
        <ContextF/>
        {User},{Channel}
    </div>
  )
}

export default ContextE

//this is the another very easiest way to use context
//in contextF component it is a very long process