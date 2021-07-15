import Post from '@/feed/post';
import styles from '@/styles/pages/feedPage.module.scss';

const Posts = (props) => {
	return props.posts.map((post) => {
		return (
			<div key={post.id} className={styles.posts}>
				<Post
					post={post.post}
					photos={post.photos}
					comments={post.comments}
				/>
			</div>
		);
	});
};

export default Posts;
