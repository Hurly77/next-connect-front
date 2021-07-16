import styles from './avatar.module.scss';
import Image from 'next/image';

const Hero = ({
	url = '/images/no-avatar.png',
	children,
}) => {
	return (
		<div className={styles.heroWrap}>
			<div className={styles.hero}>
				<Image src={url} width={130} height={130} />
				{children}
			</div>
		</div>
	);
};

export default Hero;
