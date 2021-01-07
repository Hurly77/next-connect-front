import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../Redux/actions/postActions';
import UploadImageButton from './UploadImageButton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVideo} from '@fortawesome/free-solid-svg-icons';

class NewPost extends Component {
	state = {
		text            : '',
		img             : null,
		user_id         : this.props.user.id,
		users_full_name : this.props.user.first_name + ' ' + this.props.user.last_name,
		users_avatar    : this.props.user.photo_url,
	};

	handleChange = (e) => {
		this.setState({
			...this.state,
			text : e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createPost(this.state);
		this.setState(
			{
				...this.state,
				text    : '',
				img     : null,
				user_id : this.props.user.id,
				users_full_name : this.props.user.first_name + ' ' + this.props.user.last_name,
				users_avatar    : this.props.user.photo_url
			},
			() => console.log(this.state),
		);
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
						value={this.state.text}
					/>

					<button type="submit" className="btn-none" />
				</form>
				<div>
					<div className="multi-media-select">
						<UploadImageButton />
						<button id="fa-video">
							<FontAwesomeIcon icon={faVideo} size="2x" />
						</button>
					</div>
				</div>
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
