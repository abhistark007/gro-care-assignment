import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'
import { motion } from 'framer-motion' 




function HomePage() {
  return (
    <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    className='flex min-h-screen bg-[#15141B] pb-20'>
        {/* Left Side */}
        <LeftSideBar/>



        {/* Right Side */}
        <RightSideBar/>



    </motion.div>
  )
}

export default HomePage