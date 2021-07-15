import { useState } from 'react';
import Hero from '@/ui/media/hero';
import styles from '@/styles/pages/profilePage.module.scss';

const UserHero = (props) => {
	const [avatar, setAvatar] = useState('');

	return (
		<div className={styles.hero}>
			<Hero
				width={100}
				height={100}
				alt="hero image"
				className={styles.avatarPhoto}>
				<label htmlFor="hero">UP</label>
				<input
					id="hero"
					type="file"
					accept="image/*"
					multiple={false}
					hidden
				/>
			</Hero>
		</div>
	);
};

export default UserHero;
