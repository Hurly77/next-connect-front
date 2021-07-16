import ProfileHead from '@/profile/profile-head';
import styles from '@/styles/pages/profilePage.module.scss';
const ProfileLayout = ({ children }) => {
	const props = {
		first_name: 'Cameron',
		last_name: 'Leverett',
	};
	return (
		<>
			<div className={styles.profilePage}>
				<ProfileHead {...props} />
				<div className={styles.profileBody}>{children}</div>
			</div>
		</>
	);
};

export default ProfileLayout;
