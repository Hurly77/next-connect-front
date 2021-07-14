import React from 'react';
import styles from '@/styles/pages/homePage.module.scss';
import Login from '@/components/login-or-signup/login';
import Home from '@/components/login-or-signup/home';

const HomePage = () => {
	return (
		<div className={styles.home}>
			<div className={styles.homeContent}>
				<div className={styles.homeLogin}>
					<Home />
					<Login />
				</div>
			</div>
			<p>Don't share personal information</p>
		</div>
	);
};

export default HomePage;
