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
    </div>
  </>
  )
}

export default HomePage
