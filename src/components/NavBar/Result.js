import React from 'react';
import { connect } from 'react-redux';
import {checkFriends} from '../../Redux/actions/friendActions'

const Result = ({user, button, currentUser, checkFriends}) => {
	return (
		<div key={user.id} className="search-card">
			{user.first_name}
			<p>
				<span>Joined</span>
				{user.joined}
			</p>
        {button}
			<img src={user.avatar} alt="1" className="search-avatar" />
		</div>
	);
};

const mapStateToProps = state => {
	return {
		currentUser: state.auth.currentUser
	}
}

export default connect(mapStateToProps, {checkFriends})(Result);
