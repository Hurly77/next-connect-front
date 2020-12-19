import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faImage} from '@fortawesome/free-solid-svg-icons'


export default class UploadImageButton extends Component {
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
      <div>
          <label htmlFor="actual-btn"><FontAwesomeIcon size="2x" icon={faImage} /></label>
          <input type="file" onChange={this.fileSelectAvatar} hidden />
        </div>
    )
  }
}
