import React, {Component} from 'react';
import {connect} from 'react-redux';
import Post from '../components/Feed/Post';
import {fetchAllPosts} from '../Redux/actions/postActions';
import isEqual from 'lodash.isequal'

class Posted extends Component {

	componentDidMount() {
		console.log(!!this.props)
		if(this.props.allPosts.length < 1){
			this.props.fetchAllPosts(this.props.currentUser.id);
		}
	}

	componentDidUpdate(prevProps){
		if(!isEqual(prevProps, this.props)){
			this.props.fetchAllPosts(this.props.currentUser.id);
		}
	}

	render() {
		const posts = this.props.allPosts;
		console.log(posts)
		return posts.map((post) => {
			console.log(post)
		 return (
			 <div key={post.post.id} className="posted">
				 <Post post={post.post} photos={post.photos} comments={post.comments}/>
			 </div>
		 )
	 });
	}
}

const mapStateToProps = (state) => {
	return {
		allPosts : state.post.allPosts,
		currentUser: state.auth.currentUser
	};
};

export default connect(mapStateToProps, {fetchAllPosts})(Posted);
