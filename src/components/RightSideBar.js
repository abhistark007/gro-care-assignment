import React, { useEffect, useState } from 'react'
import AdsBannerAndUserInfo from './AdsBannerAndUserInfo'
import VideoDisplaySection from './VideoDisplaySection'
import './RightSideBar.css'
import { toast } from 'react-hot-toast';

function RightSideBar() {
  const [loading,setLoading]=useState(false);
  const [page,setPage]=useState(0);
  const [posts,setPosts]=useState([]);

  const nextPage=()=>{
      setPage(page=>page+1);
  }
  const prevPage=()=>{
    if(page===0){
      toast.success("First Page Reached");
      return;
    }
    setPage(page=>page-1);
  }

  const getPosts=()=>{
    setLoading(true);
    try{
      fetch(`https://internship-service.onrender.com/videos?page=${page}`)
      .then((response)=>response.json())
      .then((result)=> {
        if(result.message==="Success"){
          if(result.data.posts.length===0){
            toast.success("Final Page Reached!");
            setPage(0);
          }
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

  useEffect(()=>{
    getPosts();
  },[page])


  return (
    <div className='flex-[0.8] flex flex-col px-5 gap-5'>
        <AdsBannerAndUserInfo/>
        {
          (loading===true)?
          (<div className='flex justify-center items-center'>
            <div className="custom-loader"></div>
          </div>)
          :(posts.length===0?(<div className='flex justify-center items-center text-white text-3xl'>No Posts Found :|</div>)
          :(<VideoDisplaySection posts={posts}/>))
        }

        <div className='flex justify-center gap-10 items-center mt-5'>
              <button onClick={prevPage} className='bg-purple-500 text-white px-4 py-2 rounded-xl duration-200 hover:scale-110'>Prev</button>
              <p className='text-white text-xl'>{page+1}</p>
              <button onClick={nextPage} className='bg-purple-500 text-white px-4 py-2  rounded-xl  duration-200 hover:scale-110'>Next</button>
        </div>
    </div>
  )
}

export default RightSideBar