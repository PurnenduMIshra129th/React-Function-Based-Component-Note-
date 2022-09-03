import React,{useState} from 'react'
import useInput from './Hooks/useInput'

function Customhook5() {
    // const [FirstName, setFirstName] = useState('')
    // const [LastName, setLastName] = useState('')

    const [FirstName,BindFirstname,ResetFirstName]= useInput('')
    const [LastName,BindLastname,ResetLastName]= useInput('')

    const SubmitHandler = (e)=>{
        e.preventDefault()
        alert (`Hello ${FirstName} ${LastName}`)
        ResetFirstName()
        ResetLastName()
    }
    // const SubmitHandler = (e)=>{
    //     e.preventDefault()
    //     alert (`Hello ${FirstName} ${LastName}`)
    // }
    
  return (
    <div>
        <form onSubmit={SubmitHandler}>
            <div>
                <label>
                    First Name
                    {/* <input value={FirstName} onChange ={e=>setFirstName(e.target.value)} type='text'/> */}
                    <input {...BindFirstname} type='text'/>
                </label>
            </div>
            <div>
                <label>
                    Last Name
                    {/* <input value={LastName} onChange ={e=>setLastName(e.target.value)} type='text'/> */}
                    <input type = 'text' {...BindLastname}/>
                </label>
            </div>
            <button type='submit'>
                Submit
            </button>
        </form>

    </div>
  )
}

export default Customhook5