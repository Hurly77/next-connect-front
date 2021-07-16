import React, { useState } from 'react';
import Comment from './comment';
import styles from '@/styles/comps/post.module.scss';

const Comments = ({ comments }) => {
	const [hideComments, setHideComments] = useState(true);

	return (
		<>
			<button
				onClick={() => setHideComments(!hideComments)}>
				Comments
			</button>
			<div
				hidden={hideComments}
				className={styles.comments}>
				{comments.map((comment, idx) => {
					return (
						<Comment key={idx} id={idx} comment={comment} />
					);
				})}
			</div>
		</>
	);
};

export default Comments;
