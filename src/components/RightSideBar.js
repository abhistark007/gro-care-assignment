import React from 'react'
import AdsBannerAndUserInfo from './AdsBannerAndUserInfo'
import VideoDisplaySection from './VideoDisplaySection'

function RightSideBar() {
  return (
    <div className='flex-[0.8] flex flex-col px-5 gap-5'>
        <AdsBannerAndUserInfo/>
        <VideoDisplaySection />
    </div>
  )
}

export default RightSideBar