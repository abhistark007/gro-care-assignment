import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import PlayCircleOutlineSharpIcon from '@mui/icons-material/PlayCircleOutlineSharp';
import PauseCircleOutlineSharpIcon from '@mui/icons-material/PauseCircleOutlineSharp';
import './VideoPlayerPage.css'

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
    const interval = setInterval(() => {
      if (playerRef.current) {
        setProgress(playerRef.current.getCurrentTime() / playerRef.current.getDuration());
      }
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);


  


  const videoUrl = `https://cdn.gro.care/${mediaurl}`
  console.log(videoUrl);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-screen bg-[#15141B] flex flex-col gap-10'>
      <button onClick={() => navigate(-1)} className='flex text-white text-2xl items-center bg-purple-500 rounded-xl py-2 px-4 w-fit'>
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
        
        <div className='flex flex-col flex-[0.5] bg-[#1F1E24] rounded-r-2xl text-white'>
          dsds
        </div>
      </div>

    </motion.div>
  )
}

export default VideoPlayerPage