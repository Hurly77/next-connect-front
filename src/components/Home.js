import React from 'react'
import { connect } from 'react-redux'
import { checkLoggedIn } from '../Redux/actions/authActions'
import { Link } from 'react-router-dom'

const Home = ({loggedIn}) => {
    if(!loggedIn){
      return (
        <div>
          <h1>Welocome to, Next-connect</h1>
          <Link to="/login">Login</Link>
          <br />
          <Link to="/signup">Signup</Link>
        </div>
      )
    } else {
     return( <>
        <h1>Welcome</h1>
      </>)
    }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {checkLoggedIn})(Home)