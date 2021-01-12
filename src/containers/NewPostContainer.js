import React, { Component } from 'react'
import NewPost from '../components/Feed/NewPost'
import UploadImages from '../components/Feed/UploadImages'
import {postImages, createPost} from '../Redux/actions/postActions'


class NewPostContainer extends Component {
  render() {
    return (
      <div>
        <NewPost props={this.props} />
        <UploadImages state={{photos: this.state.photos, tmp:this.state.tmp}} />
      </div>
    )
  }
}

const mapPropsToState = (state) => {
	return {
		user : state.auth.currentUser,
	};
};

export default connect(mapPropsToState, {createPost, postImages})(NewPostContainer);
