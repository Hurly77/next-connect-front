import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../../Redux/actions/authActions'

class Logout extends Component {
  render () {
    if (this.props.loggedIn){
      return (
        <div className="logout-div">
         <Link to="#" onClick={() => this.props.logout(this.props.history)}>
              <button type="button" className="btn-logout">Logout</button>
          </Link>
        </div>
      )
      }else{
       return( <>
        </>)
      }
  }
}
const mapStateToProps = (state) => {
	return {
		loggedIn : state.auth.loggedIn,
	};
};

export default withRouter(connect(mapStateToProps, {logout})(Logout))
