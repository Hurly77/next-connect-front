import styles from './avatar.module.scss';
import Image from 'next/image';

const Avatar = ({ url = '/images/no-avatar.png' }) => {
	return (
		<div className={styles.avatar}>
			<Image src={url} width={75} height={75} />
		</div>
	);
};

export default Avatar;
