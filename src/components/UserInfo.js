import React from 'react'
import profilePic from '../assets/profilePic2.jpg'
import UserInfoTopPart from './UserInfoTopPart'
import b1 from '../assets/b1.png'
import b2 from '../assets/b2.png'
import b3 from '../assets/b3.png'
import b4 from '../assets/b4.png'
import UserInfoBottomPart from './UserInfoBottomPart'

function UserInfo() {
  return (
    <div className='flex flex-col flex-[0.35] rounded-[2rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] justify-between py-5 px-5'>
        {/* Top Part */}
        <UserInfoTopPart profilePic={profilePic} followers={"2m"} userName={"Tony73"} />

        {/* Bottom Part */}
        <UserInfoBottomPart imageList={[b1,b2,b3,b4]} />
    </div>
  )
}

export default UserInfo