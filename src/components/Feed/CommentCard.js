import React, { Component } from 'react'


export default class CommentCard extends Component {
  state = {
    user_id: null,
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
  }

  render() {
    return (
      <div className="comment">
        <form onSubmit={this.handleSubmit}>
        <input type="text" className="comment-card" placeholder="comment" value={this.state.text} onChange={this.handleChange}/>
        <button type="submit" className="btn-comment-submit" >go</button>
        </form>
      </div>
    )
  }
}
