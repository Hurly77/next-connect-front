import React from 'react'
import { connect } from 'react-redux'


export const Profile = ({loggedIn, user}) => {
  console.log(loggedIn)
  return (
    <>
        <h1 className="profile-name">{user.first_name} {user.last_name}</h1>
    </>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Profile)