import React from 'react'
import LeftSideBar from '../components/LeftSideBar'




function HomePage() {
  return (
    <div className='flex min-h-screen bg-[#15141B]'>
        {/* Left Side */}
        <LeftSideBar/>



        {/* Right Side */}
        <div className='flex-[0.8] flex flex-col'>

        </div>
    </div>
  )
}

export default HomePage