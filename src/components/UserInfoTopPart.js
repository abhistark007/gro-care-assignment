import { Avatar } from '@mui/material'
import React from 'react'
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';

function UserInfoTopPart({profilePic,userName,followers}) {
  return (
    <div className='flex justify-between items-center'>
        <div className='flex gap-2'>
            <Avatar src={profilePic} alt={userName}/>
            <div className='flex flex-col'>
                <div className='flex text-[#605E68]'>
                    <p className='text-white'>{userName}</p>
                    <MoreVertSharpIcon/>
                </div>
                <p className='text-white'>{followers} <span className='text-[#605E68]'>followers</span></p>
            </div>
        </div>






        <button className='bg-[#1473FB] text-white  py-2 px-4 rounded-xl'>
            Upload
        </button>
    </div>
  )
}

export default UserInfoTopPart