import { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '@/actions/postActions';
import styles from '@/styles/comps/post.module.scss';

const NewPost = (props) => {
	const newPost = {
		photos: [],
		post: {
			text: '',
			user_id: props.user.id,
			users_full_name:
				props.user.first_name + ' ' + props.user.last_name,
			users_avatar: props.user.photo_url,
		},
		tmp: [],
	};
	const [state, setState] = useState(newPost);

	const handleChange = (e) => {
		e.preventDefault();
	};

	const selectPhotos = (e) => {
		const files = e.target.files;
		const a = [];
		const b = [];
		for (const file of files) {
			a.push(URL.createObjectURL(file));
			b.push(file);
		}

		setState({
			...newPost,
			photos: [...newPost.photos.concat(b)],
			tmp: [...newPost.tmp.concat(a)],
		});
	};

	const toggleImg = () => {
		const tmp = newPost.tmp;
		if (tmp) {
			return tmp.map((file) => {
				return (
					<img
						src={file}
						alt="hello"
						className={styles.newPostImg}
					/>
				);
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<div className={styles.newPostCard}>
			<h4>Whats on Your Mind?</h4>
			<form onSubmit={handleSubmit}>
				<input
					className={styles.textForNewPost}
					type="text"
					placeholder="how are you feeling"
					onChange={handleChange}
					value={newPost.post.text}
				/>
				<button type="submit" className={styles.btnNone} />
			</form>
			<div className={styles.newPhotosContainer}>
				{toggleImg()}
			</div>
			<div>
				<label
					className={styles.newPhoto}
					htmlFor="file-btn"></label>
				<input
					id="file-btn"
					type="file"
					accept="image/*"
					multiple={true}
					onChange={selectPhotos}
					hidden
				/>
			</div>
		</div>
	);
};

const mapPropsToProps = (newPost) => {
	return {
		user: newPost.auth.currentUser,
	};
};

export default connect(mapPropsToProps, { createPost })(
	NewPost,
);
