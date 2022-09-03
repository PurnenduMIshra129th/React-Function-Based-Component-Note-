import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchingDataWithUseReducer1() {
    const [Loading,SetLoading] = useState(true)
    const [Error,SetError] = useState('')
    const [Post,SetPost] = useState({})

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(Response=>{
            SetLoading(false)
            SetPost(Response.data)
            SetError('')
        })
        .catch(Error =>{
            SetLoading(false)
            SetPost({})
            SetError('SomeThing Went Wrong')
        })
    },[])
  return (
    <div>
        {Loading?'Loading':Post.title}
        {Error?Error:null}
    </div>
  )
}

export default FetchingDataWithUseReducer1

//this isthe example where we use useState 
//but in Next example we did it in useReducer