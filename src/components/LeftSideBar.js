import React from 'react'
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';

function LeftSideBar() {
  return (
    <div className='flex-[0.2] flex flex-col bg-[#191922]'>
            <ul className='flex flex-col text-white mt-5'>
                <li className='flex gap-2 items-center px-10 py-2 duration-200 hover:bg-purple-500 cursor-pointer'>
                    <p>
                        <HomeSharpIcon/>
                    </p>
                    <p>
                        Home
                    </p>
                </li>
                <li className='flex gap-2 items-center px-10 py-2 duration-200 hover:bg-purple-500 cursor-pointer'>
                    <p>
                        <WhatshotSharpIcon/>
                    </p>
                    <p>
                        Trending
                    </p>
                </li>
            </ul>
        </div>
  )
}

export default LeftSideBar