import styles from '@/styles/layout.module.scss';
import NavMap from '@/layout/navbar/nav-map';
import Logout from '@/layout/navbar/Logout';

import PrimarySearchBar from './PrimarySearchBar';

const Navbar = () => {
	return (
		<nav className="px-0 navbar bg-base-100 2xl:px-2xl xl:px-xl lg:px-lg md:px-md sm:px-sm">
			<div className="navbar-start">
				<PrimarySearchBar />
			</div>
			<NavMap />
			<Logout />
		</nav>
	);
};

export default Navbar;
