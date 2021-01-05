import React, { Component } from 'react'
import './profileImage.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {uploadAvatar} from '../../Redux/actions/authActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'

class ProfileImage extends Component {
  
  fileSelectAvatar = (e) => {
    e.preventDefault()
    debugger
      this.props.uploadAvatar(this.props.currentUser, e.target.files[0])    
  }
  
  render() {
    const avatar = this.props.currentUser.avatar
    return (
      <>
      <div className="Avatar">
          <input type="file" onChange={this.fileSelectAvatar} id="actual-btn" hidden />
          <img id="fileUpload" src={avatar ? avatar : "https://treepress.net/wp-content/plugins/treepress/public/imgs/no-avatar.png"} alt='0' className="avatar-photo"/>
          <label className="upload-avatar" htmlFor="actual-btn"><FontAwesomeIcon icon={faPencilAlt} size="2x" id="uploaded"/></label>
        </div>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default withRouter(connect(mapStateToProps, {uploadAvatar})(ProfileImage))