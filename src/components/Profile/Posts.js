import React from 'react'
import { connect } from 'react-redux'
import CommentCard from '../Feed/CommentCard'

const mapPosts = (posts) => {
  return posts.map(post => {
    return (<div className="posted">
        <div className="post-text">
            <p>{post.text}</p>
            <CommentCard />
        </div>
    </div>)
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
    posts: state.post.posts
  }
}

export default connect(mapStateToProps)(Posts)
