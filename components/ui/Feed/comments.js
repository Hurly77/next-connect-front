import React, { useState } from 'react';
import Comment from './comment';

const evalComments = (props, isToggled) => {
	if (props.length > 0 && isToggled) {
		return props.map((comment) => {
			return <Comment comment={comment} key={comment.id} />;
		});
	} else {
		return <></>;
	}
};

const Comments = ({ comments }) => {
	const [isToggled, setToggled] = useState(false);
	const toggled = () => setToggled(!isToggled);
	console.log(isToggled);
	return (
		<div id="comment-body">
			<button onClick={toggled} className={styles.toggle}>
				{comments.length} Comments
			</button>
			{isToggled ? evalComments(comments, toggled) : null}
		</div>
	);
};

export default Comments;
