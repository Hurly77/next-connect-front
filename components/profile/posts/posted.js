import Post from '@/feed/post';
import styles from '@/styles/comps/post.module.scss';

const Posted = ({ posts }) => {
	return posts.map((post) => {
		return (
			<div key={post.id} className={styles.posted}>
				<Post
					post={post.post}
					photos={post.photos}
					comments={post.comments}
				/>
			</div>
		);
	});
};

export default Posted;
