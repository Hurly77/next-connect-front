import React from 'react'
import { connect } from 'react-redux'
import Login from '../registration/Login'


const HomePage = ({state}) => {
  console.log(state)
  return (
    <div className="home-login-card">
      <Login  />
    </div>
  )
}

const mapStatetoProps = state => ({state})

export default connect(mapStatetoProps)(HomePage)
