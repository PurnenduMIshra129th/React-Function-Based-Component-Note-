import React,{useState,useEffect} from 'react'
import UseEffectRunEffectOnlyOnce from './UseEffectRunEffectOnlyOnce'

function UseEffectWithCleanUp() {
    const [Display,SetDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=>SetDisplay(!Display)}>
            Toggle Display
        </button>
        {Display && <UseEffectRunEffectOnlyOnce/>}
    </div>
  )
}

export default UseEffectWithCleanUp