import React,{useState} from 'react'

function UseStateWithArray() {
    const[Items,SetItems]= useState([])
    const AddItem =()=>{
        SetItems([...Items,{
            id:Items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={
            AddItem}>Add a Number</button>
        <ul>
            {
                Items.map(Item =>(<li key={Item.id}>
                    {Item.value}

                </li>))
            }
        </ul>
    </div>
  )
}

export default UseStateWithArray