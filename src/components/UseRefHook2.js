import React,{useState,useEffect, useRef} from 'react'

function UseRefHook2() {
    const [Timer,SetTimer] = useState(0)

    //this is important to add useref to clear interval so the code is
    const Interval = useRef()

    useEffect(()=>{
        Interval.current = setInterval(()=>{
            SetTimer(PrevTimer=>PrevTimer+1)
        },1000) 
        return ()=>{
            clearInterval(Interval.current)
        }

        
    },[])
    // useEffect(()=>{
    //     const Interval = setInterval(()=>{
    //         SetTimer(PrevTimer=>PrevTimer+1)
    //     },1000) 
    //     return ()=>{
    //         clearInterval(Interval)
    //     }

        
    // },[])
  return (
    <div>
        {Timer}
        <button onClick={()=>clearInterval(Interval.current)}>Clear</button>
        {/* <button onClick={()=>clearInterval(Interval)}>Clear</button> */}
    </div>
  )
}

export default UseRefHook2