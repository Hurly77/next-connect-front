import styles from './avatar.module.scss';
import Image from 'next/image';

const SmallAvatar = ({ url = '/images/no-avatar.png' }) => {
	return (
		<div className={styles.smallAvatar}>
			<Image src={url} width={50} height={50} />
		</div>
	);
};

export default SmallAvatar;
