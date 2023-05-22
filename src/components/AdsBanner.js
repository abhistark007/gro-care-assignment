import React from 'react'

function AdsBanner({image}) {
  return (
    <div className='flex-[0.65] flex rounded-[2rem] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] duration-200 hover:z-20 hover:scale-110 cursor-pointer'>
        <img src={image} alt='ad banner' className='rounded-[2rem] h-72 w-full object-cover object-top'/>
    </div>
  )
}

export default AdsBanner