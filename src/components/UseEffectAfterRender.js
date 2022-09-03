import React,{useState,useEffect} from 'react'

function UseEffectAfterRender() {
    const [Count,SetCount] = useState(0)
    useEffect(()=>{document.title =`You Clicked ${Count}`})
  return (
    <div>
        <button onClick={()=>SetCount(Count+1)}>Click {Count} Time</button>
    </div>
  )
}

export default UseEffectAfterRender

//componentDidUpdate