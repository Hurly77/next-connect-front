import React, {Component} from 'react';
import {connect} from 'react-redux';
import {checkFriends} from '../Redux/actions/friendActions'
import Friend from '../components/Profile/Friend'

class FriendsContainer extends Component {
	componentDidMount = () => {
		this.props.checkFriends(this.props.currentUser.id);
	};

	render() {
		return this.props.friends.map((friend) => {
			return (
					<div className="friends-container">
            <Friend props={friend}/>
					</div>
			);
		});
	}
}

const mapStateToProps = (state) => {
	return {
		friends     : state.friends.friends,
		currentUser : state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {checkFriends})(FriendsContainer);