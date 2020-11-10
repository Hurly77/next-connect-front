import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class="navbar-nav">
      <NavLink to="/" exact>Feed</NavLink>      
      <NavLink to="Inbox" exact>Inbox</NavLink>         
    </div>
  )
}

export default NavBar
