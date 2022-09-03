import React,{useState,useEffect} from 'react'
import useCounter from './Hooks/useCounter'

function CustomHook4() {
const[count,Increment,Decrement,Reset]=useCounter(10,10)
//here 10 is the intialCount and Value 10

  return (
    <div>
        <button onClick={Increment}>Increment1</button>

        <button onClick={Decrement}>Decrement1</button>

        <button onClick={Reset}>Reset</button>
        Count:{count}
    </div>
  )
}

export default CustomHook4