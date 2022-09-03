import React,{useState} from 'react'

function UseStateWithObject() {

    const[Name,SetName]= useState({FirstName :'',LastName :''})
  return (
    <div>
        <form>
            <input type="text" value={Name.FirstName} onChange ={e =>SetName({...Name, FirstName:e.target.value})}/>
            {/* here spread operator is used to solve the bug and it means it create a copy of prevobject and update only the new value added to it */}
            <input type="text" value={Name.LastName} onChange ={e =>SetName({...Name,LastName:e.target.value})}/>
        </form>
        <h1>My First Name is:{Name.FirstName} And last name is:{Name.LastName}</h1>
        <h2>{JSON.stringify(Name)}</h2>
    </div>
  )
}

export default UseStateWithObject