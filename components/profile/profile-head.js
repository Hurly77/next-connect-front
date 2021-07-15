import UserName from '@/profile/user-name';
import UserHero from '@/profile/user-hero';
import Banner from '@/profile/banner';
import ProfileNav from '@/profile/profile-nav';

const ProfileHead = (props) => {
	return (
		<>
			<Banner />
			<UserHero />
			<UserName user={props} />
			<ProfileNav />
		</>
	);
};

export default ProfileHead;
