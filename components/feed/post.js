import { useState } from 'react';
import Avatar from '@/ui/media/avatar';
import AddComment from './add-comment';
import Comments from './comments';
import styles from '@/styles/comps/post.module.scss';

const Post = ({ post, comments }) => {
	return (
		<div key={post.id} className={styles.post}>
			<div>
				<Avatar />
				<h4>{post.users_full_name}</h4>
				<caption>{post.posted_at}</caption>
			</div>
			<p>{post.text}</p>
			<Comments comments={comments} />
			<AddComment postId={post.id} />
		</div>
	);
};

export default Post;
