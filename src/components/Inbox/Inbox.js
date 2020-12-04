import React, { Component } from 'react'
import {connect} from 'react-redux'
import checkFriends from '../../Redux/actions/friendActions'


class Inbox extends Component {

  componentDidMount(){
    checkFriends(this.props.currentUser.id)
  }

  render() {
    if(this.props.pendingFriends.length > 0){
      return this.props.pendingFriends.map(r => {
      return (
        <div className="dialog">
          <h1>{r.first_name}</h1>
          helo
          <button>accept</button>
        </div>
      )
    })
  }
  else {
   return (
   <div>
      <h5>no, messages or requests</h5>
    </div>
    )}
  }
}

const mapStateToProps = state => {
  return {
    pendingFriends: state.friends.pendingFriends,
    currentUser: state.auth.currentUser
  }
}

export default connect(mapStateToProps, {checkFriends})(Inbox)
