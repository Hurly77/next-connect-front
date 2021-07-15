import styles from './avatar.module.scss';
import Image from 'next/image';

const Hero = ({
	url = '/images/no-avatar.png',
	children,
}) => {
	return (
		<div className={styles.hero}>
			<Image src={url} width={100} height={100} />
			{children}
		</div>
	);
};

export default Hero;
