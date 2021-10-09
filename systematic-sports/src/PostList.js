import React from 'react'
import PostData from './GameData.json'

const PostList = () => {
    return (
        <div>
         
            {PostData.map((postDetail, index)=>{
                return <h1>{postDetail.Market}</h1>
            })}
        </div>
    )
}

export default PostList
