import React, { Component } from 'react'
import Photos from '../components/Photos/Photos'
import { connect } from 'react-redux'

class PhotosContainer extends Component {
  render() {
    return (
      <Photos photos={this.props.photos} />
    )
  }
}

const mapStateToProps = state => {
  return {
    photos: state.post.userPhotos
  }
}

export default connect(mapStateToProps)(PhotosContainer)
