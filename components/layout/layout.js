import Navbar from '@/layout/navbar/index';
import PrimarySearchBar from '@/layout/navbar/PrimarySearchBar';
import Footer from '@/layout/footer/index';
import styles from '@/styles/layout.module.scss';

const Layout = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navbar />
			<div className={styles.main}>{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
