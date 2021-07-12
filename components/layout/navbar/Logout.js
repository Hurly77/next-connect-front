import { use } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { logout } from '../../Redux/actions/authActions';

const Logout = (props) => {
	if (props.loggedIn) {
		return (
			<>
				<Link
					to="#"
					onClick={() => props.logout(props.history)}>
					<button type="button" className="btn-logout">
						{logout}
					</button>
				</Link>
			</>
		);
	} else {
		return <></>;
	}
};
const mapStateToProps = (state) => {
	return {
		loggedIn: state.auth.loggedIn,
	};
};

export default Logout;
