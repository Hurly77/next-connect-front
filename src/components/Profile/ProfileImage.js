import React, { Component } from 'react'

export default class ProfileImage extends Component {

  state = {
    file: null
  }
  
  fileSelectAvatar = (e) => {
    this.setState({
      ...this.state,
      file: URL.createObjectURL(e.target.files[0])
    })
  }

  render() {
    return (
        <div className="Avatar">
          <img id="fileUpload" src={this.state.file} alt='0' className="avatar-photo"/>
          <label className="upload-avatar" htmlFor="actual-btn">Upload</label>
          <input type="file" onChange={this.fileSelectAvatar} id="actual-btn" hidden />
        </div>
    )
  }
}
