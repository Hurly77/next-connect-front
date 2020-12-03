import React, { Component } from 'react'
import {connect} from 'react-redux'
import checkFriends from '../../Redux/actions/friendActions'


class Inbox extends Component {

  componentDidMount(){
    checkFriends(this.props.currentUser.id)
  }

  render() {
    return this.props.pendingFriends.map(r => {
      return (
        <dive>
          <h1>{r.first_name}</h1>
          <button>accept</button>
        </dive>
      )
    })
  }
}

const mapStateToProps = state => {
  return {
    pendingFriends: state.friends.pendingFriends,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, {checkFriends})(Inbox)
