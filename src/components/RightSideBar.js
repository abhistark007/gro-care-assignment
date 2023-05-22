import React, { useState } from 'react'
import AdsBannerAndUserInfo from './AdsBannerAndUserInfo'
import VideoDisplaySection from './VideoDisplaySection'
import './RightSideBar.css'

function RightSideBar() {
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(0);
  const [posts,setPosts]=useState([]);

  const getPosts=()=>{
    setLoading(true);
    try{
      fetch(`https://internship-service.onrender.com/videos?page=${page}`)
      .then((response)=>response.json())
      .then((result)=> {
        if(result.message==="Success"){
          setPosts(result.data.posts);
          console.log(result.data.posts);
        }else{
          setPosts([]);
        }
      })
    }catch(e){
      console.log("Error occured while using getPosts");
      console.log(e.message);
    }
    setLoading(false);
  }


  return (
    <div className='flex-[0.8] flex flex-col px-5 gap-5'>
        <AdsBannerAndUserInfo/>
        {
          (loading===true)?
          (<div className='flex justify-center items-center'>
            <div class="custom-loader"></div>
          </div>)
          :(posts.length===0?(<div className='flex justify-center items-center text-white text-3xl'>No Posts Found :|</div>)
          :(<VideoDisplaySection posts={posts}/>))
        }
    </div>
  )
}

export default RightSideBar