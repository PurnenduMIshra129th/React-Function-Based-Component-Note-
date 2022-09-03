import React,{useState,useEffect} from 'react'

function UseEffectWithIncorrectDependency() {
    const [Count,SetCount] = useState(0)
    const Tick =()=>{
        SetCount(Count+1)
    }
    useEffect(()=>{
        const Interval =  setInterval(Tick,1000)
        return ()=>{
            clearInterval(Interval)
        }
    },[Count])
    //here the array is not empty because it is a dependancy if we leave it empty then count does not increment

    //or if you want to be it empty then SetCount(PrevState=>PrevState+1)
    
    //always use a function and its invokation in useEffect function
  return (
    <div>{Count}</div>
  )
}

export default UseEffectWithIncorrectDependency