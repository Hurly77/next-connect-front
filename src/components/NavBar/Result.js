import React from 'react';
import {connect} from 'react-redux';
import {request, deny} from '../../Redux/actions/friendActions';

const Result = ({user, pending, currentUser}) => {
	if (!pending.includes(user)) {
		return (
			<div>
				<h1>
					{user.first_name} {user.last_name}
				</h1>
				<img className="search-avatar" src={user.avatar} alt="hello" />
				<br />
				<button onClick={request(currentUser.id, user.id)}>HI</button>
				<p>
					<span>Joined</span> : {user.joined}
				</p>
			</div>
		);
	} else {
		return(<div>
			<h1>
				{user.first_name} {user.last_name}
			</h1>
			<img className="search-avatar" src={user.avatar} alt="hello" />
			<br />
			<button onClick={deny(currentUser, user)}>Nye</button>
			<p>
				<span>Joined</span> : {user.joined}
			</p>
		</div>)
	}
};

const mapStateToProps = (state) => {
	return {
		pending     : state.auth.pendingFriends,
		currentUser : state.auth.currentUser,
	};
};

mapDispatchToProps = dispatch => {
  return {
    request: () => dispatch({currentUser, user})
  }
}

export default connect(mapStateToProps, mapStateToProps})(Result);
