import React from 'react'
import VideoCard from './VideoCard'

function VideoDisplaySection() {
  




  return (
    <div className='flex flex-wrap gap-10  '>
        <VideoCard 
        thumbnail={"https://cdn.gro.care/53d5e59f202d_1683463530883.jpeg"}
        title={"Random Title assd  sda adsa dsad asdsa d asd i am god and i wont stop"}
        creatorName={"soniyaassssssssssssssssssssssssssssssssssssss"}
        creatorPic={"https://cdn.gro.care/6ce188269916_1667990600681.bin"}
        reactionCount={31}
        liked={true}
        />
        <VideoCard 
        thumbnail={"https://cdn.gro.care/17af050fdd9f_1683462551951.jpeg"}
        title={"Random Title"}
        creatorName={"soniya"}
        creatorPic={"https://cdn.gro.care/6ce188269916_1667990600681.bin"}
        reactionCount={31}
        liked={false}
        />
        <VideoCard 
        thumbnail={"https://cdn.gro.care/53d5e59f202d_1683463530883.jpeg"}
        title={"Random Title"}
        creatorName={"soniya"}
        creatorPic={"https://cdn.gro.care/6ce188269916_1667990600681.bin"}
        reactionCount={31}
        liked={true}
        />
        <VideoCard 
        thumbnail={"https://cdn.gro.care/53d5e59f202d_1683463530883.jpeg"}
        title={"Random Title"}
        creatorName={"soniya"}
        creatorPic={"https://cdn.gro.care/6ce188269916_1667990600681.bin"}
        reactionCount={31}
        liked={true}
        />
    </div>
  )
}

export default VideoDisplaySection