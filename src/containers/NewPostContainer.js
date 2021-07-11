// import { connect } from 'react-redux';
import NewPost from '../components/Feed/NewPost';
import UploadImages from '../components/Feed/UploadImages';
// import {
// 	postImages,
// 	createPost,
// } from '../Redux/actions/postActions';

const NewPost = (props) => {
	const info = {
		photos: [],
		tmp: [],
		post: {
			text: '',
			user_id: props.user.id,
			users_full_name:
				props.user.first_name + ' ' + props.user.last_name,
			users_avatar: props.user.photo_url,
		},
	};

	return (
		<div className="new-post-card">
			<form>
				<NewPost props={props} />
				<UploadImages
					state={{
						photos: state.photos,
						tmp: state.tmp,
					}}
				/>
			</form>
		</div>
	);
};

const mapPropsToState = (state) => {
	return {
		user: state.auth.currentUser,
	};
};

export default NewPost;
