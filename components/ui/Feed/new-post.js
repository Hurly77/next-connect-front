import { useState } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../Redux/actions/postActions';

const NewPost = () => {
	const [newPost, setNewPost] = useState({
		photos: [],
		post: {
			text: '',
			user_id: props.user.id,
			users_full_name:
				props.user.first_name + ' ' + props.user.last_name,
			users_avatar: props.user.photo_url,
		},
		tmp: [],
	});

	handleChange = (e) => {
		setNewPost({
			post: {
				...newPost.post,
				text: e.target.value,
			},
		});
	};

	selectPhotos = (e) => {
		const files = e.target.files;
		const a = [];
		const b = [];
		for (const file of files) {
			a.push(URL.createObjectURL(file));
			b.push(file);
		}
		console.log(b);

		setNewPost({
			...newPost,
			photos: [...newPost.photos.concat(b)],
			tmp: [...newPost.tmp.concat(a)],
		});
	};

	toggleImg = () => {
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

	handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData();
		const post = newPost.post;
		const photos = newPost.photos;
		for (let i = 0; i < photos.length; i++) {
			data.append('photos[]', photos[i], photos[i].name);
		}

		props.createPost(post, data);
		setNewPost({
			...newPost,
		});
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
