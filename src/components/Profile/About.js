import React from 'react'
import {connect} from 'react-redux'

const About = ({user}) => {
  console.log(user)
  return (
  <div className="about-wrapper">
  <h2 className="about-title">About</h2>
    <div className="about-details">
      <ul>
        <li>{user.work}</li>
        <li>{user.education}</li>
        <li>{user.relationship}</li>
        <li>{user.lives}</li>
        <li>{user.from}</li>
        <li>{user.joined}</li>
      </ul>
    </div>
  </div>
  )
}


const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(About)