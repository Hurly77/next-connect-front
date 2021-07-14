import React from 'react';

const Comment = ({ comment }) => {
	return (
		<div className={styles.postedCommentContainer}>
			<img
				className={styles.postedCommentAvatar}
				src={comment.users_avatar}
				alt="avatar"
			/>

			<div className={styles.postedCommentComment}>
				<p className={styles.postedCommentName}>
					{comment.users_full_name}
				</p>
				<p className={styles.postedCommentText}>
					{comment.text}
				</p>
			</div>
		</div>
	);
};

export default Comment;
