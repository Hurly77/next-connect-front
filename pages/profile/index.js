import ProfileHead from '@/profile/profile-head';
import NavLink from '@/layout/navbar/nav-link';
import styles from '@/styles/pages/profilePage.module.scss';
const ProfilePage = ({ user }) => {
	return (
		<>
			<div className={styles.profilePage}>
				<ProfileHead user={user} />
				<div className={styles.profileTabs}>
					<NavLink location="/profile/about" name="about" />
					<NavLink
						location="/profile/friends"
						name="friends"
					/>
					<NavLink location="/profile/posts" name="posts" />
					<NavLink
						location="/profile/photos"
						name="photos"
					/>
				</div>
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	return {
		props: {
			user: {
				first_name: 'Chester',
				last_name: 'Tester',
			},
		},
	};
};

export default ProfilePage;
