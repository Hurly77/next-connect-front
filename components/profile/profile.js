import React from 'react';
import { connect } from 'react-redux';

export const Profile = ({ user }) => {
	return (
		<>
			<h1 className={profileName}>
				{user.first_name} {user.last_name}
			</h1>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.currentUser,
	};
};

export default connect(mapStateToProps)(Profile);
