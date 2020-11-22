import React from 'react'
import CommentCard from './CommentCard'

const props = {text: "hello I'm wonderful today what about you"}

const Post = () => {
    return (
      <div className="post-text"> 
        <p>{props.text}</p>

        <div>
          lorem ipsum text
        </div>
          <CommentCard />
      </div>
    )
}

export default Post