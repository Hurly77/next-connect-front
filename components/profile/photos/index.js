import { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/comps/profileImage.module.scss';

const Photos = (props) => {
	const [avatar, setAvatar] = useState('');
	const fileSelectAvatar = (e) => {
		setAvatar(URL.createObjectURL(e.target.files[0]));
		const files = e.target.files;
		const data = new FormData();
		data.append('file', files[0]);
	};

	return (
		<div className={styles.Avatar}>
			<input
				type="file"
				name="newPhoto"
				accept="image/*"
				multiple={false}
				onChange={fileSelectAvatar}
				id="actual-btn"
				hidden
			/>
			<Image
				width={100}
				height={100}
				id="fileUpload"
				src={avatar ? avatar : '/images/no-avatar.png'}
				alt="0"
				className={styles.avatarPhoto}
			/>
			<label
				className={styles.uploadAvatar}
				htmlFor="actual-btn"></label>
		</div>
	);
};

export default Photos;
