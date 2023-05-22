import React from 'react'
import VideoCard from './VideoCard'

function VideoDisplaySection({posts}) {
  




  return (
    <div className='flex flex-wrap gap-10  justify-center'>
        {
          posts.map((post,index)=>{
            return <VideoCard key={index}
            thumbnail={post.submission.thumbnail}
            title={post.submission.title??"NA"}
            creatorName={post.creator.name??"NA"}
            creatorPic={post.creator.pic}
            reactionCount={post.reaction.count??0}
            liked={post.reaction.voted??false}
            mediaUrl={post.submission.mediaUrl}
            />
          })
        }
    </div>
  )
}

export default VideoDisplaySection