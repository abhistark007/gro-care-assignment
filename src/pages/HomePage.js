import React from 'react'
import LeftSideBar from '../components/LeftSideBar'
import RightSideBar from '../components/RightSideBar'




function HomePage() {
  return (
    <div className='flex min-h-screen bg-[#15141B] pb-20'>
        {/* Left Side */}
        <LeftSideBar/>



        {/* Right Side */}
        <RightSideBar/>



    </div>
  )
}

export default HomePage