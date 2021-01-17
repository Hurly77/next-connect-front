import React from 'react'


const Comment = ({comment}) => {
  return (
    <div className="posted-comment-container">
      <img src={comment.users_avatar} width="50px" height="50px" alt="avatar" />
      <p>{comment.posted_at}</p>
      <p>{comment.text}</p>

    </div>
  )
}

export default Comment
