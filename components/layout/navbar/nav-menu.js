import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../Redux/actions/authActions';
import Logout from './Logout';
import InboxButton from '../../ui/ModalButtons/InboxButton';

const NavMenu = ({ loggedIn, currentUser }) => {
	if (loggedIn) {
		return (
			<>
				<div className={styles.nav}>
					<NavLink name="Feed" location="/feed" />
					<NavLink
						location={`/${currentUse.c_id}`}
						name="Profile"
					/>
					<InboxButton />
				</div>
				<Logout />
			</>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		loggedIn: state.auth.loggedIn,
		currentUser: state.auth.currentUser,
	};
};

export default withRouter(
	connect(mapStateToProps, { logout })(NavMenu),
);
