import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {logout} from '../../Redux/actions/authActions';
import {withRouter} from 'react-router-dom'
import Logout from './Logout'


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';



const NavMenu = ({loggedIn}) => {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	
	const handleClose = () => {
		setAnchorEl(null);
	};
		if (loggedIn) {
			return (
				<div className="nav">
        		<MenuIcon className="menu-icon" onClick={handleClick} />
					<Menu
        		id="navagation"
        		anchorEl={anchorEl}
        		keepMounted
        		open={Boolean(anchorEl)}
        		onClose={handleClose}>

						<MenuItem onClick={handleClose}>
						<NavLink to="/feed" exact>Feed</NavLink>
						</MenuItem>

						<MenuItem onClick={handleClose}>
							<NavLink to="/inbox" exact>Inbox</NavLink>
						</MenuItem>

						<MenuItem onClick={handleClose}>
							<NavLink to="/profile" exact>Your Profile</NavLink>
						</MenuItem>

						<MenuItem onClick={handleClose}>
							<Logout />
						</MenuItem>
						</Menu>
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

export default withRouter(connect(mapStateToProps, {logout})(NavMenu));
