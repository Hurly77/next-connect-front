import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {updateUser} from '../../Redux/actions/authActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'

class ProfileImage extends Component {
  
  fileSelectAvatar = (e) => {
    let newInfo = {...this.props.currentUser}
    newInfo.avatar = URL.createObjectURL(e.target.files[0])
  }
  
  render() {
    return (
      <>
      <div className="Avatar">
          <input type="file" onChange={this.fileSelectAvatar} id="actual-btn" hidden />
          <img id="fileUpload" src={this.props.currentUser.avatar} alt='0' className="avatar-photo"/>
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

export default withRouter(connect(mapStateToProps, {updateUser})(ProfileImage))