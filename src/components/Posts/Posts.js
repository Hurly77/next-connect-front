import React from 'react'
import { connect } from 'react-redux'
import CommentCard from '../Feed/CommentCard'

const mapPosts = ({posts, currentUser}) => {
  debugger
  return posts.map(post => {
    if (post.id === currentUser.id){
      return (<div className="posted">
        <div className="post-text">
            <p>{post.text}</p>
            <CommentCard />
        </div>
    </div>)
    }
    
  })
}


export const Posts = ({posts}) => {
  console.log(posts)
  return (
    <>
      {mapPosts(posts)}
    </>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.post.posts,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Posts)
