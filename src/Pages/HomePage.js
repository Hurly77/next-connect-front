import React from 'react'
import './homePage.css'
import Login from '../components/Home/Login'
import Home from '../components/Home/Home'


const HomePage = () => {
  return (
  <> 
    <div className="home-login-container">
      <div className="home-login">
      <Home />
      <Login  />
      </div>
      <p>Please DO NOT share any personal information this website</p>
    </div>
  </>
  )
}

export default HomePage
