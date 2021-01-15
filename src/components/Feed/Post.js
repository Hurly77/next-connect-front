import React from 'react'
import './post.css'
import CommentCard from './CommentCard'

const mapImages = (photos) => {
  return photos.map((image) => {
    return  (
    <div className="img">
      <img src={image} alt="img post" />
    </div>
    )
  })
}

const image = (photos) => {
 if(photos[0]){ return (
    <div className="single-img">
      <img src={photos[0]}/>
    </div>
  )}
}

const Post = ({post, photos}) => {
  const single = "img-container-single"
  const container = "img-container"
    return (
      <div key={post.id} className="post">
        <div className="posted-by">
          {!post.users_avatar ? <img src={process.env.PUBLIC_URL + "no_avatar.png"} alt="avatar" width="100px" height="100px" /> 
          : <img src={post.users_avatar} width="100px" height="100px" alt="profile pic"/>}
          <h4>{post.users_full_name}</h4>
          <p id="time-posted">{post.posted_at}</p>
        </div>
          <p className="post-caption">{post.text}</p>
        <div className={photos.length > 1 ? container : single}>
          {photos.length > 1 ? mapImages(photos) : image(photos)}
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