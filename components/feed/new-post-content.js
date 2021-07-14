import NewPost from '../components/Feed/NewPost';
import UploadImages from '../components/Feed/UploadImages';

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
		<div className={styles.newPostCard}>
			<form>
				<NewPost props={props} />
				<UploadImages />
			</form>
		</div>
	);
};

export default NewPost;
