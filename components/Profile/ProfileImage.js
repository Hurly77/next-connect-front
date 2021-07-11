import React, { Component } from 'react'
import './profileImage.css'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {uploadAvatar, updateProps} from '../../Redux/actions/authActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons'
import isEqual from 'lodash.isequal'

class ProfileImage extends Component {
  state = {
    avatar: this.props.currentUser.photo_url
  }


  componentDidUpdate(prevProps){
    if(!isEqual(this.props.currentUser, prevProps.currentUser)){
      this.props.updateProps(this.props.currentUser.id)      
    }
  }

  toggeleImg = () => {
    
  }


  fileSelectAvatar = (e) => {
    this.setState({
      avatar: URL.createObjectURL(e.target.files[0])
    })
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    this.props.uploadAvatar(this.props.currentUser, data)
  }

  render() {
    const avatar = this.state.avatar
    return (
      <div className="Avatar">
          <input type="file" name="newPhoto" accept="image/*" multiple={false} onChange={this.fileSelectAvatar} id="actual-btn" hidden />
          <img id="fileUpload" src={avatar ? avatar : "https://treepress.net/wp-content/plugins/treepress/public/imgs/no-avatar.png"} alt='0' className="avatar-photo"/>
          <label className="upload-avatar" htmlFor="actual-btn"><FontAwesomeIcon icon={faPencilAlt} size="2x" id="uploaded"/></label>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}

export default withRouter(connect(mapStateToProps, {uploadAvatar, updateProps})(ProfileImage))