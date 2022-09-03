import {useState} from 'react'

function useInput(InitialValue) {
    const [value, setValue] = useState(InitialValue)
    const Reset =()=>{
        setValue(InitialValue)
    }
    const Bind = {
    value,
        onChange:e=>{
            setValue(e.target.value)
        }
    }
    return [value,Bind,Reset]
}

export default useInput