import React, {Component} from 'react';
import {connect} from 'react-redux';
import Posts from '../components/Feed/Posts';
import {fetchPosts} from '../Redux/actions/postActions';

class Posted extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const posts = this.props.posts;
		return posts.map((post) => {
		 return (
			 <div key={post.id} className="posted">
				 <Posts text={post.text} />
			 </div>
		 )
	 });
	}
}

const mapStateToProps = (state) => {
	return {
		posts : state.post.posts,
	};
};

export default connect(mapStateToProps, {fetchPosts})(Posted);
