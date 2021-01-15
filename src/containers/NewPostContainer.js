import React, { Component } from 'react'
import {connect} from 'react-redux'
import NewPost from '../components/Feed/NewPost'
import UploadImages from '../components/Feed/UploadImages'
import {postImages, createPost} from '../Redux/actions/postActions'


class NewPostContainer extends Component {
  constructor(props) {
		super(props);
		this.initState = {
      photos: [],
      tmp: [],
			post : {
				text            : '',
				user_id         : this.props.user.id,
				users_full_name : this.props.user.first_name + ' ' + this.props.user.last_name,
				users_avatar    : this.props.user.photo_url,
      },
		};
		this.state = this.initState;
  }
  
  submitPhotos = () => {

  }
  
  submitPost = () => {
    
  }


  render() {
    return (
      <div className="new-post-card">
        <form>
        <NewPost props={this.props} />
        <UploadImages state={{photos: this.state.photos, tmp:this.state.tmp}} />
        </form>
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
