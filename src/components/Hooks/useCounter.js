import {useState} from 'react'

//here intial count use as parameter and value
function useCounter(InitialCount = 0,Value) {
    const [count, setcount] = useState(InitialCount)
    const Increment = ()=>{
        setcount(PrevCount=>PrevCount+Value)
    }
    const Decrement = ()=>{
        setcount(PrevCount=>PrevCount-Value)
    }
    const Reset = ()=>{
        setcount(InitialCount)
    }

    return[count,Increment,Decrement,Reset]

}

export default useCounter