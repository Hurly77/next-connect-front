
import React, { Component } from 'react'
import { connect } from 'react-redux'


class CommentCard extends Component {
  state = {
    post_id: null,
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
    console.log("submit")
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
export default connect(mapStateToProps)(CommentCard)
