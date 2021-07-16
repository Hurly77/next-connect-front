import UserName from '@/profile/user-name';
import UserHero from '@/profile/user-hero';
import Banner from '@/profile/banner';
import ProfileNav from '@/profile/profile-nav';
import styles from '@/styles/pages/profilePage.module.scss';

const ProfileHead = (props) => {
	return (
		<div className={styles.profileHead}>
			<Banner />
			<UserHero />
			<UserName user={props} />
			<ProfileNav />
		</div>
	);
};

export default ProfileHead;
