import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '@/styles/comps/banner.module.scss';
import Icon from '@/ui/icon';

const Banner = (props) => {
	return (
		<>
			<div className={styles.profileBanner}>
				<Image
					width={1400}
					height={425}
					src="/images/banner.png"
					alt="banner"
				/>
				<label
					htmlFor="upload"
					className={styles.uploadBanner}>
					<Icon name="file_upload" />
				</label>

				<input
					id="upload"
					type="file"
					hidden
					accept="image/*"
				/>
			</div>
		</>
	);
};

export default Banner;
