import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { logout } from '../../Redux/actions/authActions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'

class Logout extends Component {
  render () {
    const logout = <FontAwesomeIcon size="2x" icon={faSignOutAlt} />
    if (this.props.loggedIn){
      return (
        <>
         <Link to="#" onClick={() => this.props.logout(this.props.history)}>
              <button type="button" className="btn-logout">{logout}</button>
          </Link>
        </>
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
