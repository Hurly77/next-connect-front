import React, {Component} from 'react';
import './friendsContainer.css';
import {connect} from 'react-redux';
import {checkFriends} from '../Redux/actions/friendActions';
import Friend from '../components/Friends/Friend';

class FriendsContainer extends Component {
	componentDidMount = () => {
		this.props.checkFriends(this.props.currentUser.id);
	};

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
