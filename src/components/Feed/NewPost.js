import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../Redux/actions/postActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';

class NewPost extends Component {
	constructor(props) {
		super(props);
		this.initState = {
			post : {
				text            : '',
				user_id         : this.props.user.id,
				users_full_name : this.props.user.first_name + ' ' + this.props.user.last_name,
				users_avatar    : this.props.user.photo_url,
			},
		};
		this.state = this.initState;
	}

	handleChange = (e) => {
		this.setState({
			post : {
				...this.state.post,
				text : e.target.value,
			},
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const post = this.state.post;

		this.props.createPost(post);
		this.setState({
			...this.initState,
		});
	};

	render() {
		return (
			<div className="new-post-card">
				<h4>Whats on Your Mind?</h4>
				<form onSubmit={this.handleSubmit}>
					<input
						className="text-for-new-post"
						type="text"
						placeholder="how are you feeling"
						onChange={this.handleChange}
						value={this.state.post.text}
					/>
					<button type="submit" className="btn-none" />
				</form>
				<div className="new-photos-container">{this.toggelImg()}</div>
			</div>
		);
	}
}

const mapPropsToState = (state) => {
	return {
		user : state.auth.currentUser,
	};
};

export default connect(mapPropsToState, {createPost})(NewPost);
