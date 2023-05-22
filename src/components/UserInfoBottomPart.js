import React from 'react'

function UserInfoBottomPart({imageList}) {
  return (
    <div className='userInfoBottomClass flex overflow-x-scroll rounded-xl px-4 py-2 gap-3 '>
        {
            imageList.map((image,index)=>{
                return <img key={index} src={image} alt='demo' className='rounded-xl w-[50%]'/>
            })
        }
    </div>
  )
}

export default UserInfoBottomPart