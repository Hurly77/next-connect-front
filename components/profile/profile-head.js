import UserName from '@/profile/user-name';
import Photos from '@/profile/photos/index';
import Banner from '@/profile/banner';

const ProfileHead = ({ user }) => {
	return (
		<>
			<Banner />
			<Photos />
			<UserName user={user} />
		</>
	);
};

export default ProfileHead;
