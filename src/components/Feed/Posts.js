import React from 'react'
import CommentCard from './CommentCard'

const Posts = ({text, img, user}) => {
    return (
      <div className="post-text"> 
          <h3>{user.first_name}</h3>
          <img>{img}</img>
          <p>{text}</p>
        
        <div></div>
          <CommentCard />
      </div>
    )
}

export default Posts