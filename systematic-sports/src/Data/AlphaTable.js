import React from 'react'
import PostData from '../GameData.json'

const AlphaTable = () => {
    return (
        <div>
         
            {PostData.map((postDetail, index)=>{
                return <h1>{postDetail.Market}</h1>
            })}
        </div>
    )
}

export default AlphaTable