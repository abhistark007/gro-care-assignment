import React from 'react'
import AdsBanner from './AdsBanner'
import adsBannerImage from '../assets/adBannerImage.png'

function AdsBannerAndUserInfo() {
  return (
    <div className='flex'>
        <AdsBanner image={adsBannerImage}/>
    </div>
  )
}

export default AdsBannerAndUserInfo