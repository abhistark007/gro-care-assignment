import React from 'react'
import './NavBar.css'
import appLogo from '../assets/app_logo.svg'
import { Avatar } from '@mui/material'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function NavBar() {
    return (
        <div className='bg-[#15141B] py-5 text-white flex justify-between items-center px-10'>
            <img src={appLogo} alt='gro.care' />
            <div className='flex border-2 focus:border-blue-600 rounded-3xl w-[50%]'>
            <input placeholder='Search' className='rounded-l-3xl py-2 px-3 outline-none bg-[#1F1E24] w-full'/>
            <div className='flex justify-between items-center rounded-r-3xl py-2 px-2 bg-purple-500 cursor-pointer duration-150 hover:scale-90'>
                <SearchSharpIcon/>
            </div>
            </div>
            <Avatar className='!rounded-xl' sx={{ bgcolor: "violet" }} variant="square" >
                AK
            </Avatar>

        </div>
    )
}

export default NavBar