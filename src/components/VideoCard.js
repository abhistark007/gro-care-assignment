import { Avatar } from '@mui/material'
import React from 'react'
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';

function VideoCard({thumbnail,title,creatorName,reactionCount,creatorPic,liked}) {
  return (
    <div className='flex flex-col gap-4 w-[15rem] rounded-[2rem] border-2 bg-[#15141B] border-purple-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] duration-200 hover:z-20 hover:scale-110 cursor-pointer'>
        <img src={thumbnail} alt={title} className='  rounded-t-[2rem] w-[15rem] '/>
        <div className='flex gap-2 px-2 py-2'>
            <Avatar src={creatorPic}/>
            <div className='flex flex-col '>
                <p className='text-white'>{title.length>20?title.substring(0,20)+"...":title}</p>
                <div className='flex justify-between text-[#7F7D8D] flex-col '>
                    <p className=''>{creatorName.length>20?creatorName.substring(0,20)+"...":creatorName}</p>
                    <div className='flex gap-3'>
                      <p className=''>{reactionCount} reactions</p>
                      {
                        liked===true?<p className='text-red-600'><FavoriteSharpIcon/></p>:<p className='text-white'><FavoriteBorderSharpIcon/></p>
                      }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default VideoCard