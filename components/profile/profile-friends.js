import React, { Component } from 'react';
import './friendsContainer.css';
import { connect } from 'react-redux';
import { checkFriends } from '../../store/redux/actions/friendActions';
import isEqual from 'lodash.isequal';
import Friend from '../components/Friends/Friend';

const ProfileFriends = () => {
	useEffect(() => {
		const props = this.props;
		const userId = props.currentUser.id;
		!isEqual(props.friends, prevProps.friends)
			? checkFriends(userId)
			: null;
	}, []);

	mapFriends = (friends) => {
		return friends.map((friend) => {
			return <Friend key={friend.id} props={friend} />;
		});
	};

	return (
		<div className="friends-container">
			{this.mapFriends(this.props.friends)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		friends: state.friends.friends,
		currentUser: state.auth.currentUser,
	};
};

export default ProfileFriends;
