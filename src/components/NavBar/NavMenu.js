import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../../Redux/actions/authActions';
import {withRouter} from 'react-router-dom'
import Logout from './Logout'
import InboxButton from '../ModalButtons/InboxButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faHome} from '@fortawesome/free-solid-svg-icons'


const NavMenu = ({loggedIn}) => {
	let i = '2x'
	const profile = <FontAwesomeIcon size={i} icon={faUser} />
	const home = <FontAwesomeIcon size={i} icon={faHome}/>
		if (loggedIn) {
			return (
			<>
				<div className="nav">
					<NavLink to="/feed" className="nav-link">{home}</NavLink>
					<NavLink to="/profile" className="nav-link">{profile}</NavLink>
					<InboxButton />
				</div>
					<Logout />
			</>
			);
		}
}

const mapStateToProps = (state) => {
	return {
		loggedIn : state.auth.loggedIn,
	};
};

export default withRouter(connect(mapStateToProps, {logout})(NavMenu));
