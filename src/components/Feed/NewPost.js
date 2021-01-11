import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../Redux/actions/postActions';
import ImageUploader from 'react-images-upload'

class NewPost extends Component {
	constructor(props) {
		super(props);
		this.initState = {
			pictures : [],
			post   : {
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

	selectPhotos = (picture) => {
		this.setState(
			{
				...this.state,
				pictures : [...this.state.pictures.concat(picture[0])],
			});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createPost(this.state);
		console.log(this.initState)
		
		this.setState(
			{
				...this.initState,
			}, () => console.log(this.state));
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
				<div>
						<ImageUploader
						withIcon={true}
						button="Choose Images"
						buttonStyles={{bacgroundColor: 'black'}}
						withPreview={true}
						onChange={this.selectPhotos}
						withPreview={true}
						imgExtension={['.jpg', '.gif', '.png', '.jpeg']}
						/>
				</div>
						</form>
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
