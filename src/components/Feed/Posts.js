import React from 'react'
import CommentCard from './CommentCard'

const Posts = ({post}) => {
    return (
      <div className="post-text">
        <div className="posted-by">
          <h1>{post.users_full_name}</h1>
          {!post.users_avatar ? <img src={process.env.PUBLIC_URL + "no_avatar.png"} alt="1" width="100px" height="100px" /> 
          : <img src={post.users_avatar} width="100px" height="100px" alt="1"/>}
          <p id="time-posted">Posted On : {post.posted_at}</p>
          <p>{post.text}</p>
        </div>
          {!post.img ? <img src={process.env.PUBLIC_URL + "cookie.jpg"} alt="1" /> : <img src={post.img} alt="1" />}
        <div className="posted-text">
           <p>Like |  comments</p>
          --------------------------------
          <CommentCard />
        </div>
      </div>
    )
}

export default Posts