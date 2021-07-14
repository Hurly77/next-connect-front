import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/comps/banner.module.scss';

const Banner = (props) => {
	const handleChange = (e) => {
		setBanner(URL.createObjectURL(e.target.files[0]));
		const files = e.target.files;
		const data = new FormData();
		data.append('banner', files[0]);
	};

	const bannerUrl = '/images/json-borne.png';
	const backUp =
		'https://www.thefilmagazine.com/wp-content/uploads/2016/07/bourne-banner.jpg';

	return (
		<>
			<div className={styles.profileBanner}>
				<Image
					width={100}
					height={100}
					src={bannerUrl ? bannerUrl : backUp}
					alt="banner"
				/>
			</div>
			<label className={styles.uploadBanner}>
				<input
					type="file"
					hidden
					accept="image/*"
					onChange={handleChange}
				/>
			</label>
		</>
	);
};

export default Banner;
