import { useState } from 'react';
import './post.css';
import CommentCard from './comment-card';
import Comments from './comments';

const mapImages = (photos) => {
	return photos.map((image) => {
		return (
			<div className={styles.img}>
				<img src={image} alt="img post" />
			</div>
		);
	});
};

const image = (photos) => {
	if (photos[0]) {
		return (
			<div className={styles.singleImg}>
				<img src={photos[0]} />
			</div>
		);
	}
};

const Post = ({ post, photos, comments }) => {
	const single = 'img-container-single';
	const container = 'img-container';
	const [isLiked, setLiked] = useState(false);
	const like = () => setLiked(!isLiked);

	return (
		<div key={post.id} className={styles.post}>
			<div className={styles.postedBy}>
				{!post.users_avatar ? (
					<img
						src={process.env.PUBLIC_URL + 'no_avatar.png'}
						alt="avatar"
						width="100px"
						height="100px"
					/>
				) : (
					<img
						src={post.users_avatar}
						width="100px"
						height="100px"
						alt="profile pic"
					/>
				)}
				<h4>{post.users_full_name}</h4>
				<p id="time-posted">{post.posted_at}</p>
			</div>
			<p className={styles.postCaption}>{post.text}</p>
			<div
				className={photos.length > 1 ? container : single}>
				{photos.length > 1
					? mapImages(photos)
					: image(photos)}
			</div>
			{comments.length > 0 ? (
				<Comments comments={comments} />
			) : null}
			<div className={styles.LikeComment}>
				<button
					onClick={() =>
						document.getElementById(post.id).focus()
					}
					id="sec-1">
					↕ Comment
				</button>
				<button id="sec-2" onClick={() => like()}>
					{!isLiked ? 'like' : 'unlike'}
				</button>
			</div>
			<CommentCard postId={post.id} />
		</div>
	);
};

export default Post;
