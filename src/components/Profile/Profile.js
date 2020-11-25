import React from 'react'
import { connect } from 'react-redux'


export const Profile = ({loggedIn}) => {
  console.log(loggedIn)
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
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps)(Profile)