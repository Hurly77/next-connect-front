import Link from 'next/link';
import styles from '@/styles/layout.module.scss';

const NavLink = ({ name, location, key }) => {
	return (
		<li key={key} className={styles.navLink}>
			<Link href={location}>
				<a className={styles.navLinkText}>{name}</a>
			</Link>
		</li>
	);
};

export default NavLink;
