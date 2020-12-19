import React, { Component } from 'react'
import { connect } from 'react-redux'

class Feed extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.first_name}</h1>
      </div>
    )
    }
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Feed)
