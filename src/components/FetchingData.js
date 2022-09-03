import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchingData() {
    const [Posts,SetPosts]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(Res =>{
            console.log(Res);
            SetPosts(Res.data)
        })
        .catch(Error=>{
            console.log(Error);
        })
    },[])
  return (
    <div>
        <ul>
            {
                Posts.map(Post =><li key={Post.id}>
                    {Post.title}
                </li>)
            }
        </ul>
    </div>
  )
}

export default FetchingData