import React, { Component } from 'react';
import './friendsContainer.css';
import { connect } from 'react-redux';
import { checkFriends } from '../../src/Redux/actions/friendActions';
import isEqual from 'lodash.isequal';
import Friend from '../components/Friends/Friend';

const FriendsPage = () => {
	useEffect(() => {
		const props = this.props;
		const userId = props.currentUser.id;
		!isEqual(props.friends, prevProps.friends)
			? props.checkFriends(userId)
			: console.log('friends updated');
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

// const mapStateToProps = (state) => {
// 	return {
// 		friends     : state.friends.friends,
// 		currentUser : state.auth.currentUser,
// 	};
// };

export default Friends;
