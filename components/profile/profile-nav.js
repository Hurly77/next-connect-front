import { profileLinks } from '@/data/links';
import NavLink from '@/layout/navbar/nav-link';
import styles from '@/styles/pages/profilePage.module.scss';

const ProfileNav = () => {
	return (
		<ul className={styles.profileNav}>
			{profileLinks.map((link, idx) => {
				return (
					<div className={styles.tab}>
						<NavLink
							key={idx}
							id={idx}
							location={link.location}
							name={link.name}
						/>
					</div>
				);
			})}
		</ul>
	);
};

export default ProfileNav;
