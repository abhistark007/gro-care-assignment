import React from 'react'
import profilePic from '../assets/profilePic2.jpg'
import UserInfoTopPart from './UserInfoTopPart'

function UserInfo() {
  return (
    <div className='flex flex-col flex-[0.3]'>
        {/* Top Part */}
        <UserInfoTopPart profilePic={profilePic} followers={"2m"} userName={"Tony73"} />

        {/* Bottom Part */}
    </div>
  )
}

export default UserInfo