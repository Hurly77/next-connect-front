import React from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { checkLoggedIn, logout } from '../Redux/actions/authActions'
import { Link } from 'react-router-dom'

const NavBar = ({loggedIn}) => {
  if(loggedIn) {
    return (
      <div className="navbar-nav">      
        <NavLink to="/feed" exact>Feed</NavLink>      
        <NavLink to="/inbox" exact>Inbox</NavLink>     
        <NavLink to="/profile" exact>Your Profile</NavLink>
        <Link to="#" onClick={() => this.props.logout(this.props.history)}>
              Logout
            </Link>
      </div>
    )
  } else {
   return ( <div>

    </div>)
  }
  
}
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkLoggedIn: () => dispatch(checkLoggedIn()),
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
