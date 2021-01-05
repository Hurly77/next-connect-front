import React, { Component } from 'react'
import { connect } from 'react-redux'
import isEqual from 'lodash.isequal'
import Post from '../Feed/Post'

class Posts extends Component {

componentDidUpdate = (prevProps) => {
  if(!isEqual(prevProps.userPosts, this.props.userPosts)){
  }
}

render() {
  return this.props.userPosts.map(post => {
    return (
      <div key={post.id} className="posted">
        <Post post={post}/>
      </div>
    )
  })
}
}

const mapStateToProps = state => {
  return {
    userPosts: state.post.userPosts,
  }
}

export default connect(mapStateToProps)(Posts)
