import React from 'react';

const Friend = ({ props }) => {
	return (
		<div key={props.id} className={styles.friendCard}>
			<img
				src={props.photo_url}
				alt="avatar"
				className={styles.friendAvatar}
			/>
			<h2 className={styles.friendName}>
				{props.first_name} {props.last_name}
			</h2>
			<button className={styles.friendProfile}>•••</button>
		</div>
	);
};

export default Friend;
