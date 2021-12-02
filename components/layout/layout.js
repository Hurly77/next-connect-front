import Navbar from '@/layout/navbar/index';
import PrimarySearchBar from '@/layout/navbar/PrimarySearchBar';
import Footer from '@/layout/footer/index';
import styles from '@/styles/layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className="bg-base-300">
			<Navbar />
			<div className="min-h-screen px-0 2xl:px-2xl xl:px-xl lg:px-lg md:px-md sm:px-sm">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
