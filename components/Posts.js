import { connect } from 'react-redux';
import Post from '../Feed/post';

const Posts = (props) => {
	return props.userPosts.map((post) => {
		return (
			<div key={post.post.id} className={styles.posted}>
				<Post
					post={post.post}
					photos={post.photos}
					comments={post.comments}
				/>
			</div>
		);
	});
};

const mapStateToProps = (state) => {
	return {
		userPosts: state.post.userPosts,
	};
};

export default connect(mapStateToProps)(Posts);
