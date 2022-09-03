import React ,{useReducer}from 'react'


const IntialState = 0
const Reducer = (CurrentState,Action)=>{
    switch (Action) {
        case "Increment":
            return CurrentState+1
    
        case 'Decrement':
            return CurrentState-1
        
        case 'Reset':
            return IntialState
        
        default :
        return CurrentState
        
            
    }
}

function UseReducer3() {
const[Count,Dispatch] =    useReducer(Reducer,IntialState)
const [CountTwo,DispatchTwo] = useReducer(Reducer,IntialState)
  return (
    <div>
        <div>Count-{Count}</div>
        <button onClick={()=>Dispatch('Increment')}>increment</button>
        <button onClick={()=>Dispatch('Decrement')}>decrement</button>
        <button onClick={()=>Dispatch('Reset')}>reset</button>

        <div>Count-{CountTwo}</div>
        <button onClick={()=>DispatchTwo('Increment')}>increment</button>
        <button onClick={()=>DispatchTwo('Increment')}>increment</button>
        <button onClick={()=>DispatchTwo('Decrement')}>decrement</button>
        <button onClick={()=>DispatchTwo('Reset')}>reset</button>
    </div>
  )
}

export default UseReducer3
//this is the example of Multiple Reducer