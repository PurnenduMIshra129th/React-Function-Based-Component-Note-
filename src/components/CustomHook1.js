import React,{useState,useEffect} from 'react'


function CustomHook1() {
    const [Count, setCount] = useState(0)
    useEffect(() => {
      document.title = `Count:${Count}`
    
    }, [Count])
    
  return (
    <div>
        <button onClick={()=>setCount(Count+1)}>Count:{Count}</button>
    </div>
  )
}

export default CustomHook1