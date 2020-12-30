import React, {Component} from 'react';
import {connect} from 'react-redux';
import checkFriends from '../../Redux/actions/friendActions';
import AcceptFriend from '../NavBar/AcceptFriend';
import {accept_request, deny} from '../../Redux/actions/friendActions';
import isEqual from 'lodash.isequal'

class Inbox extends Component {
	componentDidMount() {
		checkFriends(this.props.currentUser.id);
	}

	componentDidUpdate = (prevProps) => {
		if(!isEqual(this.props, prevProps)){
			console.log("not")
		} else {
			console.log("equal")
		}
	}

	render() {
		if (this.props.requests.length > 0) {
			return this.props.requests.map((r) => {
				return (
					<div key={r.id} className="search-card">
						<h1>{r.first_name}</h1>
						helo
						<AcceptFriend
							aU={this.props.currentUser.id}
							pU={r.id}
							accept={this.props.accept_request}
							deny={this.props.deny}
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
	}
}

const mapStateToProps = (state) => {
	return {
		requests    : state.friends.requests,
		currentUser : state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {checkFriends, accept_request, deny})(Inbox);
