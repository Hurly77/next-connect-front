import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {updateUser} from '../../Redux/actions/authActions'

class ProfileImage extends Component {
  
  fileSelectAvatar = (e) => {
    let newInfo = {...this.props.currentUser}
    newInfo.avatar = URL.createObjectURL(e.target.files[0])
    this.props.updateUser(newInfo, this.props.history)
  }
  
  render() {
    return (
      <div className="Avatar">
          <label className="upload-avatar" htmlFor="actual-btn">Upload</label>
          <input type="file" onChange={this.fileSelectAvatar} id="actual-btn" hidden />
          <img id="fileUpload" src={this.props.currentUser.avatar} alt='0' className="avatar-photo"/>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default withRouter(connect(mapStateToProps, {updateUser})(ProfileImage))