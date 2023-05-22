import React from 'react'
import AdsBanner from './AdsBanner'
import adsBannerImage from '../assets/adBannerImage.png'
import UserInfo from './UserInfo'

function AdsBannerAndUserInfo() {
  return (
    <div className='flex gap-5'>
        <AdsBanner image={adsBannerImage}/>
        <UserInfo/>
    </div>
  )
}

export default AdsBannerAndUserInfo