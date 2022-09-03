import React,{useState} from 'react'

function UseStateWithPreviousState() {

    const InitialCount = 0
    const[Count,SetCount] = useState(InitialCount)

    const IncrementFive=()=>{
        for (let i = 0; i < 5; i++) {
            // SetCount(Count+1)
            SetCount(PrevCount => PrevCount+1)//corect way
            //PrevCount is afunction
            
        }
    }
  return (
    <div>
        count:{Count}
        <button onClick={()=>SetCount(InitialCount)}>Reset</button>

        <button onClick={()=>SetCount(PrevCount => PrevCount+1)}>Increment</button >
        {/* <button onClick={()=>SetCount(Count+1)}>Increment</button > */}

        <button onClick={()=>SetCount(Count-1)}>Decrement</button>

        <button onClick={IncrementFive}>IncrementFive</button>
    </div>
  )
}

export default UseStateWithPreviousState