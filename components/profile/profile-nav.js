import { profileLinks } from '@/data/links';
import NavLink from '@/layout/navbar/nav-link';
import styles from '@/styles/pages/profilePage.module.scss';

const ProfileNav = () => {
	return (
		<ul className={styles.profileNav}>
			{profileLinks.map((link, idx) => {
				return (
					<li key={idx}>
						<NavLink
							location={link.location}
							name={link.name}
						/>
					</li>
				);
			})}
		</ul>
	);
};

export default ProfileNav;
