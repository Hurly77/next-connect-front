import React from 'react'


const Comment = ({comment}) => {
  return (
    <div className="posted-comment-container">
      <img className="posted-comment-avatar" src={comment.users_avatar} alt="avatar" />
      
      <div className="posted-comment-comment">
      <p className="posted-comment-name">{comment.users_full_name}</p>
      <p className="posted-comment-text">{comment.text}</p>
      </div>

    </div>
  )
}

export default Comment
