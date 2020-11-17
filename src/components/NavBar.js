import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar-nav">
      <NavLink to="/feed" exact>Feed</NavLink>      
      <NavLink to="/inbox" exact>Inbox</NavLink>     
      <NavLink to="/profile" exact>Inbox</NavLink>     
    </div>
  )
}

export default NavBar
