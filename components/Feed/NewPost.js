import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createPost} from '../../Redux/actions/postActions';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons';

class NewPost extends Component {
	constructor(props) {
		super(props);
		this.initState = {
			photos : [],
			post  : {
				text            : '',
				user_id         : this.props.user.id,
				users_full_name : this.props.user.first_name + ' ' + this.props.user.last_name,
				users_avatar    : this.props.user.photo_url,
			},
			tmp: []
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

	selectPhotos = (e) => {
		const files = e.target.files;
		const a = []
		const b = []
		for(const file of files){
			a.push(URL.createObjectURL(file))
			b.push(file)
		}
		console.log(b)
		
		this.setState({
			...this.state,
			photos : [...this.state.photos.concat(b)],
			tmp   : [...this.state.tmp.concat(a)],
		});
	};

	toggelImg = () => {
		const tmp = this.state.tmp;
		if (tmp) {
			return tmp.map(file => {
				return <img src={file} alt="hello" className="new-post-img" />;
			})
		}
	};

	handleSubmit = (e) => {
		e.preventDefault()
		const data = new FormData();
		const post = this.state.post;
		const photos = this.state.photos
		for(let i=0;i<photos.length;i++){
				data.append("photos[]", photos[i], photos[i].name)
		}
		console.log(data)

		this.props.createPost(post, data)
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
				<div>
					<label className="new-photo" htmlFor="file-btn">
						<FontAwesomeIcon size="2x" icon={faImage} id="new-photo-upload" />
					</label>
					<input
						id="file-btn"
						type="file"
						accept="image/*"
						multiple={true}
						onChange={this.selectPhotos}
						hidden
					/>
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
