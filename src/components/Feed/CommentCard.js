
import React, { Component } from 'react'
import { connect } from 'react-redux'
import comment from '../../Redux/actions/commentActions'


class CommentCard extends Component {
  state = {
    user_id: this.props.currentUser.id,
    post_id: this.props.postId,
    users_avatar: this.props.currentUser.photo_url,
    users_full_name: this.props.currentUser.first_name + " " + this.props.currentUser.last_name,
    text: ''
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      text: e.target.value  
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.comment(this.state)
  }

  render() {
    return (
   <div className="comment-card">
        <img src={this.props.currentUser.photo_url}/>
      <div className="comment">
        <form onSubmit={this.handleSubmit} id="comment-form">
        <input type="text" className="comment-input" placeholder="comment" value={this.state.text} onChange={this.handleChange}/>
        </form>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
  }
}
export default connect(mapStateToProps, {comment})(CommentCard)
