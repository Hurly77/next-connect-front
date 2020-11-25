import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../Redux/actions/postActions';

class NewPost extends Component {
	state = {
		text    : '',
		img     : null,
		user_id : this.props.user,
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
				user_id : this.props.user,
			},
			() => console.log(this.state),
		);
	};

	render() {
		return (
			<div className="new-post-card">
        <form onSubmit={this.handleSubmit}>

          <input 
          className="text-for-new-post" 
          type="text" 
          placeholder="how are you feeling" 
          onChange={this.handleChange} 
          value={this.state.text} />

					<button type="submit" className="btn-none" />
				</form>
				<div>
					<div className="multi-media-select">
						<div className="mm">♂ photo/video</div>
						<div className="mm">♫ music</div>
						<div className="mm">♪ emoticon</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapPropsToState = (state) => {
	return {
		user : state.auth.currentUser.id,
	};
};

export default connect(mapPropsToState, {createPost})(NewPost);
