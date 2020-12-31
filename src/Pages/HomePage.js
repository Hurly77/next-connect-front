import React from 'react'
import './homePage.css'
import { connect } from 'react-redux'
import Login from '../components/Home/Login'
import Home from '../components/Home/Home'


const HomePage = ({state}) => {
  return (
  <> 
    <div className="home-login-container">
      <div className="home-login">
      <Home />
      <Login  />
      </div>
    </div>
  </>
  )
}

const mapStatetoProps = state => ({state})

export default connect(mapStatetoProps)(HomePage)
