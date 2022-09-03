import React,{useContext} from 'react'
import {CounterContext} from '../App'

function UseReducerA() {
    const CountContext = useContext(CounterContext)
  return (
    <div>
        count:{CountContext.CountState}
         <button onClick={()=>CountContext.CountDispatch('Increment')}>increment</button>
        <button onClick={()=>CountContext.CountDispatch('Decrement')}>decrement</button>
        <button onClick={()=>CountContext.CountDispatch('Reset')}>reset</button>
    </div>
  )
}

export default UseReducerA