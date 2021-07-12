import Link from 'next/link';

const NavLink = ({ name, location }) => {
	return (
		<Link href={location}>
			<a className={styles.navLink}>{name}</a>
		</Link>
	);
};

export default NavLink;
