import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import checkFriends from '../../Redux/actions/friendActions';
import AcceptFriend from './ui/buttons/AcceptFriend';
import {
	accept_request,
	deny,
} from '../../Redux/actions/friendActions';

const Inbox = (props) => {
	useEffect(() => {
		checkFriends(props.currentUser.id);
	}, []);

	if (props.requests.length > 0) {
		return props.requests.map((r) => {
			return (
				<div key={r.id} className={styles.searchCard}>
					<h1>{r.first_name}</h1>
					<AcceptFriend
						aU={props.currentUser.id}
						pU={r.id}
						accept={props.accept_request}
						deny={props.deny}
					/>
				</div>
			);
		});
	} else {
		return (
			<div>
				<h5>no, messages or requests</h5>
			</div>
		);
	}
};

const mapStateToProps = (state) => {
	return {
		requests: state.friends.requests,
		currentUser: state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {
	checkFriends,
	accept_request,
	deny,
})(Inbox);
