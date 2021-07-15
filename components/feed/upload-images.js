import { useState } from 'react';
import styles from '@/styles/comps/post.module.scss';

const UploadImages = () => {
	return (
		<div>
			<div className={styles.newPhotosContainer}></div>
			<label
				className={styles.newPhoto}
				htmlFor="file-btn"></label>
			<input
				id="file-btn"
				type="file"
				accept="image/*"
				multiple={true}
				onChange={selectPhotos}
				hidden
			/>
		</div>
	);
};

export default UploadImages;
