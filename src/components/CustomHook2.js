import React,{useState} from 'react'
import useDocumentTitle from './Hooks/UseDocumentTitle'


function CustomHook2() {
    const [Count, setCount] = useState(0)
useDocumentTitle(Count)    
  return (
    <div>
        <button onClick={()=>setCount(Count+1)}>Count:{Count}</button>
    </div>
  )
}

export default CustomHook2
// this is the example of custom hooks which is created in hook folder