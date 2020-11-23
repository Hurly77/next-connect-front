import React from 'react'
import { connect } from 'react-redux'
import { checkLoggedIn } from '../../Redux/actions/authActions';

const Home = () => {
  return (
    <>
    </>
  )
}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {checkLoggedIn})(Home)