import styles from '@/styles/layout.module.scss';
import NavMap from '@/layout/navbar/nav-map';

import PrimarySearchBar from './PrimarySearchBar';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<PrimarySearchBar />
			<NavMap />
		</nav>
	);
};

export default Navbar;
