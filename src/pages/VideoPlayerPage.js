import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { motion } from 'framer-motion'

function VideoPlayerPage() {
  const { mediaurl } = useParams();
  const navigate = useNavigate();

  const videoUrl = `https://cdn.gro.care/${mediaurl}`
  console.log(videoUrl);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className='h-screen bg-[#15141B]'>
      <button onClick={() => navigate(-1)}>Go back</button>
      <ReactPlayer url={videoUrl} loop={true} playing={true} />

    </motion.div>
  )
}

export default VideoPlayerPage