import React from 'react'
import CommentCard from './CommentCard'

const Posts = ({post}) => {

    return (
      <div className="post-text">
        <div className="posted-by">
          <h1>{post.users_full_name}</h1>
          <img src={!post.users_avatar ? "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png" : post.users_avatar} width="100px" height="100px"></img>
          <p id="time-posted">Posted On : {post.posted_at}</p>
          <p>{post.text}</p>
        </div>
          <img src={!post.img ? "https://incrediblethings.com/wp-content/uploads/2016/04/giant-chocolate-chip-cookie-topped-with-chocolate-chip-cookies-e1461279976684.jpg" : post.img}></img>
        <div className="posted-text">
           <p>Like |  comments</p>
          --------------------------------
          <CommentCard />
        </div>
      </div>
    )
}

export default Posts