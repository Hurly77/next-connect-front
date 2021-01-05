import React, {Component} from 'react';
import './friendsContainer.css';
import {connect} from 'react-redux';
import {checkFriends} from '../Redux/actions/friendActions';
import isEqual from 'lodash.isequal'
import Friend from '../components/Friends/Friend';

class FriendsContainer extends Component {
	componentDidUpdate = (prevProps) => {
		const props = this.props
		const userId = props.currentUser.id
		!isEqual(props.friends, prevProps.friends) ? props.checkFriends(userId) : console.log("friends updated");
	}

	mapFriends = (friends) => {
		return friends.map((friend) => {
			return <Friend key={friend.id} props={friend} />;
		});
	};

	render() {
		return ( 
			<div className="friends-container">
				{this.mapFriends(this.props.friends)}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		friends     : state.friends.friends,
		currentUser : state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {checkFriends})(FriendsContainer);
