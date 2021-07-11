import React, {Component} from 'react';
import './banner.css';
import {connect} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPencilAlt} from '@fortawesome/free-solid-svg-icons';
import {updateProps, uploadBanner} from '../../Redux/actions/authActions';
import isEqual from 'lodash.isequal'

class Banner extends Component {

  state = {
    banner: this.props.currentUser.banner
  }


  componentDidUpdate(prevProps){
    if(!isEqual(this.props.currentUser, prevProps.currentUser)){
      this.props.updateProps(this.props.currentUser.id)      
    }
  }


  handleChange = (e) => {
    this.setState({
      banner: URL.createObjectURL(e.target.files[0])
    })
    const files = e.target.files
    const data = new FormData()
    data.append('banner', files[0])
    this.props.uploadBanner(this.props.currentUser, data)
  }
  
	render() {
		const bannerUrl = this.props.currentUser.banner_url;
		const backUp = 'https://www.thefilmagazine.com/wp-content/uploads/2016/07/bourne-banner.jpg';
    
		return (
			<>
				<div className="profile-banner">
					<img src={bannerUrl ? bannerUrl : backUp} alt="banner" />
				</div>
				<label className="upload-banner">
					<FontAwesomeIcon id="ban-i" icon={faPencilAlt} size="2x" />
					<input type="file" hidden accept="image/*" onChange={this.handleChange} />
				</label>
			</>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		currentUser : state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {updateProps, uploadBanner})(Banner);
