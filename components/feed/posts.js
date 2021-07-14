import Post from '@/ui/feed/post';

const Posts = (props) => {
	return props.posts.map((post) => {
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

export default Posts;
