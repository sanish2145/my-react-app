import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const SingleBlog = () => {
    const [SingleBlog, setBlogs]=useState();
    const{id}=useParams();
    const fetchData= async()=>{
        const data= await axios.get("https://blog-hqx2.onrender.com/blog/single/$(id)")
        console.log(data,"My name is sanish bhandari");
    }


    useEffect(()=>{

    }
)
    }

  return (
    <div>
      
    </div>
  )


export default SingleBlog
