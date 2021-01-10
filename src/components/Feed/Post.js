import React from 'react'
import './post.css'
import CommentCard from './CommentCard'

const mapImages = ({images}) => {
  return images.map((image) => {
    return  <img src={image} alt="img post" />
  })
}

const Post = ({post}) => {
    return (
      <div className="post">
        <div className="posted-by">
          {!post.users_avatar ? <img src={process.env.PUBLIC_URL + "no_avatar.png"} alt="avatar" width="100px" height="100px" /> 
          : <img src={post.users_avatar} width="100px" height="100px" alt="profile pic"/>}
          <h4>{post.users_full_name}</h4>
          <p id="time-posted">{post.posted_at}</p>
        </div>
          <p className="post-caption">{post.text}</p>
        <div className="img-container">
         
        </div>
        <div className="posted-text">
          <br />
           <p>Like |  comments</p>
          --------------------------------
          <CommentCard />
        </div>
      </div>
    )
}

export default Post