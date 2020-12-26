import React, { Component } from 'react'
import { connect } from 'react-redux'

class Friends extends Component {
  render() {
    debugger
    return (
      <div className="friends-list-wrapper">
        <h1 className="friends-list-title">Friends</h1>
        <div className="friends-list">
          {this.props.friends.map(friend => {return <h1>{friend.first_name}</h1>})}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends.friends
  }
}

export default connect(mapStateToProps)(Friends)