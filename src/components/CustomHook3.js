import React,{useState,useEffect} from 'react'

function CustomHook3() {
    const [count, setcount] = useState(0)
    const Increment = ()=>{
        setcount(PrevCount=>PrevCount+1)
    }
    const Decrement = ()=>{
        setcount(PrevCount=>PrevCount-1)
    }
    const Reset = ()=>{
        setcount(0)
    }

  return (
    <div>
        <button onClick={Increment}>Increment1</button>

        <button onClick={Decrement}>Decrement1</button>

        <button onClick={Reset}>Reset</button>
        Count:{count}
    </div>
  )
}

export default CustomHook3