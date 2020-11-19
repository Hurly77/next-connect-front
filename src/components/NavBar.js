import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../Redux/actions/authActions';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

const NavBar = ({loggedIn}) => {
		if (loggedIn) {
			return (
				<div className="navbar-nav">
					<NavLink to="/feed" exact>
						Feed
					</NavLink>
					<NavLink to="/inbox" exact>
						Inbox
					</NavLink>
					<NavLink to="/profile" exact>
						Your Profile
					</NavLink>
					<Link to="#" onClick={() => this.props.logout(this.props.history)}>
						Logout
					</Link>
				</div>
			);
		} else {
			return (
				<>
				</>
			)
		}
}

const mapStateToProps = (state) => {
	return {
		loggedIn : state.auth.loggedIn,
	};
};

export default withRouter(connect(mapStateToProps, {logout})(NavBar));
