import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../../Redux/actions/authActions';
import {withRouter} from 'react-router-dom'
import Logout from './Logout'
import InboxButton from '../Inbox/InboxButton'



const NavMenu = ({loggedIn}) => {
		if (loggedIn) {
			return (
				<div className="nav">
					<NavLink to="/profile" className="nav-link">Profile</NavLink>
					<NavLink to="/feed" className="nav-link">Feed</NavLink>
					<InboxButton />
					<Logout />

				</div>
			);
		}
}

const mapStateToProps = (state) => {
	return {
		loggedIn : state.auth.loggedIn,
	};
};

export default withRouter(connect(mapStateToProps, {logout})(NavMenu));
