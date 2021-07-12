import { useEffect } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Feed/Post';
import { fetchAllPosts } from '../../store/redux/actions/postActions';
import isEqual from 'lodash.isequal';

const Posted = (props) => {
	useEffect(() => {
		if (props.allPosts.length < 1) {
			props.fetchAllPosts(props.currentUser.id);
		}
	}, []);

	useEffect((prevProps) => {
		if (!isEqual(prevProps, props)) {
			props.fetchAllPosts(props.currentUser.id);
		}
	});

	const posts = props.allPosts;
	return posts.map((post) => {
		console.log(post);
		return (
			<div key={post.post.id} className="posted">
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
		allPosts: state.post.allPosts,
		currentUser: state.auth.currentUser,
	};
};

export default connect(mapStateToProps, { fetchAllPosts })(
	Posted,
);
