import styles from '@/styles/result.module.scss';

const Results = ({ user, button }) => {
	return (
		<div key={user.id} className={styles.searchCard}>
			{user.first_name}
			<p>
				<span>Joined</span>
				{user.joined}
			</p>
			{button}
			<img
				src={user.photo_url}
				alt="1"
				className={styles.searchAvatar}
			/>
		</div>
	);
};

export default Results;
