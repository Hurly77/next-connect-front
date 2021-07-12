import React from 'react';
import styles from '@/styles/pages/homePage.module.scss';
import Login from '@/layout/login';
import Home from '@/components/home';

const HomePage = () => {
	return (
		<>
			<div className={styles.homeLoginContainer}>
				<div className={styles.homeLogin}>
					<Home />
					<Login />
				</div>
				<p>
					Please DO NOT share any personal information this
					website
				</p>
			</div>
		</>
	);
};

export default HomePage;
