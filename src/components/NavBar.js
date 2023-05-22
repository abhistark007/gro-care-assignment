import React from 'react'
import './NavBar.css'
import appLogo from '../assets/app_logo.svg'
import { Avatar } from '@mui/material'

function NavBar() {
    return (
        <div className='wrapper h-16 text-white flex justify-between items-center px-10'>
            <img src={appLogo} alt='gro.care' />

            <Avatar className='!rounded-xl' sx={{ bgcolor: "purple" }} variant="square" >
                AK
            </Avatar>

        </div>
    )
}

export default NavBar