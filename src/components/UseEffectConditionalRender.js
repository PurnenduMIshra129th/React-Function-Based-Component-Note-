import React,{useState,useEffect} from 'react'

function UseEffectConditionalRender() {
    const[Count,SetCount] = useState(0)
    const [Name,SetName] = useState('')

    useEffect(()=>{
        console.log('UseEffect-Upadating document Title');
    },[Count])
    //here to conditional render a second parameter is given as array
  return (
    <div>
        <input type ='text' value={Name} onChange ={e =>SetName(e.target.value)}/>
        <button onClick={()=>SetCount(Count+1)}>Click {Count} Time</button>

    </div>
  )
}

export default UseEffectConditionalRender

//if we not use conditional reandering then after every word changeing in the input fileld the log statement appear