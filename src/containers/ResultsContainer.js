import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router'
import Result from '../components/NavBar/Result';
import CancelButton from '../components/NavBar/CancelButton';
import RequestButton from '../components/NavBar/RequestButton';
import Unfriend from '../components/NavBar/Unfriend';
import AcceptFriend from '../components/NavBar/AcceptFriend';
import isEqual from 'lodash.isequal'
import {checkFriends, deny, request, accept_request} from '../Redux/actions/friendActions';
import { LinkToProfile } from '../components/NavBar/LinkToProfile';

class ResultsContainer extends Component {
	componentDidMount = () => {
		this.props.checkFriends(this.props.currentUser.id)
	}

  componentDidUpdate = (prevProps) => {
		const props = this.props, prev = prevProps;
		const r = props.requests, p = props.pending, f = props.friends;
		const r2 = prev.requests, p2 = prev.pending, f2 = prev.friends;
	
		console.log(isEqual(r, r2), isEqual(p, p2), isEqual(f, f2))
		if(!isEqual(r, r2) || !isEqual(p, p2) || !isEqual(f, f2)){
			this.props.checkFriends(props.currentUser.id)
		}
	}

	isPending = (id) => {
		const ids = this.props.pending.map((user) => {
			return user.id;
		});
		return ids.includes(id);
	};

	isFriend = (id) => {
		const ids = this.props.friends.map((user) => {
			return user.id;
		});
		return ids.includes(id);
	};

	isRequested = (id) => {
		const ids = this.props.requests.map((user) => {
			return user.id;
		});

		return ids.includes(id);
	};

	render() {
		const users = this.props.results;
		const aU = this.props.currentUser.id;
		return users.map((user) => {
			const pU = user.id;

			if(user.id === this.props.currentUser.id){
				return (
					<Result key={user.id} user={user} button={<LinkToProfile />}/>
				)
			}

			if (this.isFriend(user.id)) {
				return (
					<Result key={user.id} user={user} button={<Unfriend unfriend={this.props.deny} aU={aU} pU={pU} />} />
				);
			}
			if (this.isRequested(user.id)) {
				return (
					<Result
						key={user.id}
						user={user}
						button={<AcceptFriend deny={this.props.deny} accept={this.props.accept_request} aU={aU} pU={pU} />}
					/>
				);
			}
			if (this.isPending(user.id)) {
				return (
					<Result
						key={user.id}
						user={user}
						button={<CancelButton cancel={this.props.deny} aU={aU} pU={pU} />}
					/>
				);
			} else {
				return (
					<Result
						key={user.id}
						user={user}
						button={<RequestButton request={this.props.request} aU={aU} pU={pU} />}
					/>
				);
			}
		});
	}
}

const mapStateToProps = (state) => {
	return {
		results     : state.search.results,
		pending     : state.friends.pendingFriends,
		friends     : state.friends.friends,
		requests    : state.friends.requests,
		currentUser : state.auth.currentUser,
	};
};

export default withRouter(connect(mapStateToProps, {checkFriends, deny, request, accept_request})(ResultsContainer))
