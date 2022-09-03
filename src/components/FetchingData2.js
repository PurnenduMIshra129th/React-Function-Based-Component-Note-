import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchingData2  ()   {
    const [Posts,SetPosts]= useState({})
    const [Id,SetId] =  useState(1)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Id}`)
        .then(Res =>{
            console.log(Res);
            SetPosts(Res.data)
        })
        .catch(Error=>{
            console.log(Error);
        })
    },[Id])
  return (
    <div>
        <input type="text" value={Id} onChange = {e => SetId(e.target.value)}/>
        <div>{Posts.title}</div>
        {/* <ul>
            {
                Posts.map(Post =><li key={Post.id}>
                    {Post.title}
                </li>)
            }
        </ul> */}
    </div>
  )
}

export default FetchingData2