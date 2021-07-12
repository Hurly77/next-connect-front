import Link from 'next/Link';

export const LinkToProfile = () => {
	return (
		<button className={styles.resultBtnCurrentUser}>
			<Link href={'/profile'}>
				<a>Profile</a>
			</Link>
		</button>
	);
};
