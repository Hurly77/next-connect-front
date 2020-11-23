import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPost } from '../../Redux/actions/postActions'
 
class NewPost extends Component {
  state = {
    text: '',
    img: null,
    user_id: this.props.user
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.createPost(this.state)
  }

  render() {
    console.log(this.props)
    return (
      <div className="new-post-card">
        <form onSubmit={this.handleSubmit}>
          <input className="text-for-new-post" type="text" placeholder="how are you feeling" onChange={this.handleChange} />
          <button type="submit" className="btn-none"/>
        </form>
        <div>
          <div className="multi-media-select">
            <div className="mm">♂ photo/video</div>
            <div className="mm">♫ music</div>
            <div className="mm">♪ emoticon</div>
          </div>
        </div>
      </div>
    )
  }
}

const mapPropsToState = state => {
  return {
    user: state.auth.currentUser.id
  }
}

export default connect(mapPropsToState, { createPost })(NewPost)