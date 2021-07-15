import Link from 'next/link';
import styles from '@/styles/layout.module.scss';
import Icon from '@/ui/icon';

const NavLink = ({ name, location, icon = false }) => {
	return (
		<li className={styles.navLink}>
			<Link href={location}>
				<a className={styles.navLinkText}>
					{icon ? <Icon name={name} /> : name}
				</a>
			</Link>
		</li>
	);
};

export default NavLink;
