import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import PauseCircleOutlineSharpIcon from '@mui/icons-material/PauseCircleOutlineSharp';
import './VideoPlayerPage.css'
import NoImageAvailable from '../assets/No_image_available.svg'
import { Avatar } from '@mui/material';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

function VideoPlayerPage() {
  const { mediaurl } = useParams();
  const navigate = useNavigate();
  const playerRef = useRef(null);
  const [isPlaying, setPlaying] = useState(true);
  const [progress, setProgress] = useState(0);


  const togglePlay = () => {
    setPlaying((prevPlaying) => !prevPlaying);
  };

  // const handleSeek = (event) => {
  //   const progressBar = event.target;
  //   const clickedTime = (event.nativeEvent.offsetX / progressBar.offsetWidth) * playerRef.current.getDuration();
  //   playerRef.current.seekTo(clickedTime);
  // };
  const handleSeek = (event) => {
    const progressBar = event.target;
    const clickPosition = event.nativeEvent.offsetX;
    const progressBarWidth = progressBar.offsetWidth;
    const clickedProgress = clickPosition / progressBarWidth;
    const duration = playerRef.current.getDuration();
    const clickedTime = clickedProgress * duration;
    playerRef.current.seekTo(clickedTime);
  };
  


  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    const interval = setInterval(() => {
      if (playerRef.current) {
        setProgress(playerRef.current.getCurrentTime() / playerRef.current.getDuration());
      }
    }, 1000);
    setLiked(post.reaction.voted??false);
    return () => clearInterval(interval);
  }, []);


  
  const location = useLocation();
  const post = location.state;
  // console.log(post);
  // Extracting Data from post and handling null value
  const title=post.submission.title??"Not Available";
  
  const description =post.submission.description??"Not Available";
  
  const creatorName=post.creator.name??"Not Available";
  const creatorHandle=post.creator.handle??"Not Available";
  const creatorPic=post.creator.pic??NoImageAvailable;
  const reactionCount=post.reaction.count??"0";
  const [liked,setLiked]=useState(false);
  


  const videoUrl = `https://cdn.gro.care/${mediaurl}`
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='min-h-screen bg-[#15141B] flex flex-col gap-10 pb-20'>
      <button onClick={() => {
        togglePlay();
        navigate(-1);
      }} className='flex text-white text-2xl items-center bg-purple-500 rounded-xl py-2 px-4 w-fit'>
        <ArrowBackSharpIcon />
        <p>Go back</p>
      </button>
      <div className='flex mx-32  h-[75vh] rounded-2xl'>
        <div className=' flex relative flex-[0.5]'>
          <div className='flex justify-end absolute right-0 left-0 top-0 bottom-0'>
          <ReactPlayer
            ref={playerRef}
            url={videoUrl} loop={true} playing={isPlaying} controls={false}
            height="100%" />
          </div>
            <div className='absolute flex flex-col bottom-0 left-0 right-0'>
          <button className='!text-3xl text-white' onClick={togglePlay}>
            {
              isPlaying ? <PauseCircleOutlineSharpIcon /> : <PlayCircleOutlineSharpIcon />
            }
          </button>
          <div
            className="progress-bar"
            onClick={handleSeek}
          >
            <div className="progress-bar-filled" style={{ transform: `scaleX(${progress})` }}></div>
          </div>
        </div>
        </div>
        
        <div className='flex flex-col flex-[0.5] bg-[#1F1E24] rounded-r-2xl text-white py-4 px-3 gap-4 overflow-y-scroll'>
          <p className='text-3xl'>{title}</p>
          <hr className='h-2  bg-purple-600'/>
          <div className='flex flex-wrap gap-5 items-center'>
            <Avatar src={creatorPic}/>
            <div className='flex flex-col'>
            <p>{creatorName}</p>
            <p className='text-blue-500'>{creatorHandle}</p>
            </div>
          </div>
          <div className='flex gap-10'>
            <p>{reactionCount} Reactions</p>
            <p className='cursor-pointer'>
            {
                        liked===true?<p className='text-red-600 duration-200' onClick={()=>setLiked(like=>!like)}><FavoriteSharpIcon/></p>:<p className='text-white duration-200'  onClick={()=>setLiked(like=>!like)}><FavoriteBorderSharpIcon/></p>
            }
            </p>
          </div>
          <p className='text-2xl'>{description}</p>


        </div>
      </div>

    </motion.div>
  )
}

export default VideoPlayerPage