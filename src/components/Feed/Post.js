import React from 'react'
import './post.css'
import CommentCard from './CommentCard'

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
        <div class="img-container">
          {!post.img ? <img src={process.env.PUBLIC_URL + "cookie.jpg"} alt="cookie" /> : <img src={post.img} alt="img post" />}
        </div>
        <div className="posted-text">
           <p>Like |  comments</p>
          --------------------------------
          <CommentCard />
        </div>
      </div>
    )
}

export default Post