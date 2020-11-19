import React from 'react'
import { connect } from 'react-redux'


export const Profile = ({user}) => {
  console.log(user.LoggedIn)
  return (
    <div>
        <h1>Profile</h1>
        <div className="container">
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Profile)