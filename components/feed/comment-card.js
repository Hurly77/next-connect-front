import { useState } from 'react';
import styles from '@/styles/comps/post.module.scss';

const CommentCard = (props) => {
	const [text, setText] = useState('');

	const handleChange = (e) => {
		e.preventDefault;
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('submit: from comment-card.js');
	};

	return (
		<div className={styles.commentCard}>
			<img src={props.photo_url} />
			<div className={styles.comment}>
				<form
					onSubmit={handleSubmit}
					className={styles.commentForm}>
					<input
						id={props.postId}
						type="text"
						className={styles.commentInput}
						placeholder="comment"
						value={text}
						onChange={handleChange}
					/>
				</form>
			</div>
		</div>
	);
};

export default CommentCard;
