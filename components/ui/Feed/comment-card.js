import { useState } from 'react';
import { connect } from 'react-redux';
import comment from '../../../store/redux/actions/commentActions';

const CommentCard = () => {
	const [user, setUser] = useState({
		user_id: props.currentUser.id,
		post_id: props.postId,
		users_avatar: props.currentUser.photo_url,
		users_full_name:
			props.currentUser.first_name +
			' ' +
			props.currentUser.last_name,
		text: '',
	});

	handleChange = (e) => {
		setUser({
			...user,
			text: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		props.comment(state);
	};

	return (
		<div className={styles.comment - card}>
			<img src={props.currentUser.photo_url} />
			<div className={styles.comment}>
				<form onSubmit={handleSubmit} id="comment-form">
					<input
						id={props.postId}
						type="text"
						className={styles.comment - input}
						placeholder="comment"
						value={state.text}
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
	};
};
export default connect(mapStateToProps, { comment })(
	CommentCard,
);
