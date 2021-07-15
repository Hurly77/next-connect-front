import styles from '@/styles/layout.module.scss';
import NavMap from '@/layout/navbar/nav-map';
import Logout from '@/layout/navbar/Logout';

import PrimarySearchBar from './PrimarySearchBar';

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.topbar}>
				<PrimarySearchBar />
				<Logout />
			</div>
			<NavMap />
		</nav>
	);
};

export default Navbar;
