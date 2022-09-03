import React ,{useReducer}from 'react'


const IntialState = {
    FirstCounter:0,
    SecondCounter:10
}
const Reducer = (CurrentState,Action)=>{
    switch (Action.type) {
        case "Increment":
        //     return {FirstCounter:IntialState.FirstCounter+1}
    
        // case 'Decrement':
        //     return {FirstCounter:IntialState.FirstCounter-1}
        
        // case 'Reset':
        //     return IntialState
        
        // default :
        // return CurrentState
        
        case "Increment":
            return {...IntialState,FirstCounter:IntialState.FirstCounter+Action.value}
    
        case 'Decrement':
            return {...IntialState,FirstCounter:IntialState.FirstCounter.value}
        case "Increment2":
            return {...IntialState,SecondCounter:IntialState.SecondCounter+Action.value}
    
        case 'Decrement2':
            return {...IntialState,SecondCounter:IntialState.SecondCounter.value}
        
        case 'Reset':
            return IntialState
        
        default :
        return CurrentState
        
            
    }
}

function UseReducer2() {
    // useReducer(Reducer,IntialState)
const[Count,Dispatch] =    useReducer(Reducer,IntialState)
  return (
    <div>
        <div>First Counter-{Count.FirstCounter}</div>
        <div>Second Counter{Count.SecondCounter}</div>
        {/* <button onClick={()=>Dispatch({type:'Increment'})}>increment By 1</button>
        <button onClick={()=>Dispatch({type:'Decrement'})}>decrement By 1</button> */}
        <button onClick={()=>Dispatch({type:'Reset'})}>reset</button>

        <button onClick={()=>Dispatch({type:'Increment', value:1})}>increment By 1</button>
        <button onClick={()=>Dispatch({type:'Decrement',value:1})}>decrement By 1</button>

        <button onClick={()=>Dispatch({type:'Increment',value:5})}>increment By 5</button>
        <button onClick={()=>Dispatch({type:'Decrement',value:5})}>decrement By 5</button>

        <div>
        <button onClick={()=>Dispatch({type:'Increment2', value:1})}>increment Counter2 By 1</button>
        <button onClick={()=>Dispatch({type:'Decrement2',value:1})}>decrement Counter2 By 1</button>
        </div>
    </div>
  )
}

export default UseReducer2

//this is the example of complex state and complex action
//it is accesed by object 