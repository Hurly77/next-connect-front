import ProfileHead from '@/profile/profile-head';
import styles from '@/styles/pages/profilePage.module.scss';
const ProfileLayout = ({ children }) => {
	const props = {
		first_name: 'cameron',
		last_name: 'leverett',
	};
	return (
		<>
			<div className={styles.profilePage}>
				<ProfileHead {...props} />
				<div>{children}</div>
			</div>
		</>
	);
};

export default ProfileLayout;
