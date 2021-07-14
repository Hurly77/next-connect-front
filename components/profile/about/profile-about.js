import React, { Component } from 'react';
import About from '@/components/profile/about-section';
import styles from '@/styles/comps/about-wrap.module.scss';

const ProfileAbout = () => {
	return (
		<>
			<div className={styles.aboutMain}>
				<div className={styles.aboutContainer1}>
					<About />
				</div>
			</div>
		</>
	);
};

export default ProfileAbout;
