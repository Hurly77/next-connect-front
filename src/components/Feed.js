import React from 'react'
import { connect } from 'react-redux'

const Feed = ({user}) => {
  console.log(user)
  return (
    <div>
      <h1>This is You Feed</h1>
      <div className="container">
        <h1>{user.first_name}</h1>
        <p>{user.email}</p>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Feed)
