import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from '../components/Feed/Post';
import {fetchAllPosts} from '../Redux/actions/postActions';

class Posted extends Component {

	componentDidMount() {
		this.props.fetchAllPosts(this.props.id);
	}

	componentDidUpdate(){
		
	}

	render() {
		const posts = this.props.allPosts;
		return posts.map((post) => {
		 return (
			 <div key={post.id} className="posted">
				 <Post post={post}/>
			 </div>
		 )
	 });
	}
}

const mapStateToProps = (state) => {
	return {
		allPosts : state.post.allPosts,
		id: state.auth.currentUser.id
	};
};

export default connect(mapStateToProps, {fetchAllPosts})(Posted);
