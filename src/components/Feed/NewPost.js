import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../Redux/actions/postActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons'

class NewPost extends Component {
	state = {
		text            : '',
		photos					: [],
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
	
	toggelImg = () => {
		const files = this.state.files;
		if (files)
		{return files.map(file => <img src={URL.createObjectURL(file)} alt="hello" className="new-post-img" />)}
	 }
 
 
	 selectPhotos = (e) => {
		 this.setState({
			 ...this.state,
			 photos: [...this.state.files.concat(e.target.files[0])]
		 })
	 }
	

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createPost(this.state);
		this.setState(
			{
				...this.state,
				text    : '',
				photos  : [],
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
				<div className="new-phot">
      {this.toggelImg()}
      </div>
        <div>
          <label className="new-photo" htmlFor="file-btn"><FontAwesomeIcon size="2x" icon={faImage} id="new-photo-upload" /></label>
          <input id="file-btn" type="file" accept="image/*" onChange={this.selectPhotos} hidden />
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
