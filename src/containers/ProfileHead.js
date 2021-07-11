import Profile from '../components/Profile/Profile';
import ProfileImage from '../components/Profile/ProfileImage';
import Banner from '../components/Profile/Banner';
import { connect } from 'react-redux';
import { checkFriends } from '../Redux/actions/friendActions';
import {
	fetchUserPosts,
	fetchPhotos,
} from '../Redux/actions/postActions';

const ProfileHead = () => {
	return (
		<>
			<Banner />
			<ProfileImage />
			<Profile />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		currentUser: state.auth.currentUser,
	};
};

export default connect(mapStateToProps, {
	checkFriends,
	fetchUserPosts,
	fetchPhotos,
})(ProfileHead);
