import React,{useEffect,useRef} from 'react'

function UseRefHook() {
    const InputRef = useRef(null)

    useEffect(()=>{
        InputRef.current.focus()
    },[])
  return (
    <div>
        <input ref = {InputRef} type='text'/>
    </div>
  )
}

export default UseRefHook