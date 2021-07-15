import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/comps/banner.module.scss';

const Banner = (props) => {
	return (
		<>
			<div className={styles.profileBanner}>
				<Image
					width={600}
					height={350}
					src="/images/Jason-borne.png"
					alt="banner"
				/>
			</div>
			<label className={styles.uploadBanner}>
				<input type="file" hidden accept="image/*" />
			</label>
		</>
	);
};

export default Banner;
