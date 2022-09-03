import React ,{useReducer}from 'react'

// const IntialState = 0
// const Reducer = (CurrentState,Action)=>{
//     return NewState
// }
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

function UseReducer() {
    // useReducer(Reducer,IntialState)
const[Count,Dispatch] =    useReducer(Reducer,IntialState)
  return (
    <div>
        <div>Count-{Count}</div>
        <button onClick={()=>Dispatch('Increment')}>increment</button>
        <button onClick={()=>Dispatch('Decrement')}>decrement</button>
        <button onClick={()=>Dispatch('Reset')}>reset</button>
    </div>
  )
}

export default UseReducer

//this is the example of simple state and simple action