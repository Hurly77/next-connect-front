import React from 'react'
import CommentCard from './CommentCard'

const Posts = ({text}) => {
  console.log(text, "posts")
    return (
      <div className="post-text"> 
          <p>{text}</p>
        
        <div></div>

          <CommentCard />
      </div>
    )
}

export default Posts