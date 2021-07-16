import styles from '@/styles/pages/feedPage.module.scss';
import SmallAvatar from '../ui/media/small -avatar';

const Comment = ({ comment, id }) => {
	return (
		<div key={id} className={styles.comment}>
			<SmallAvatar />
			<div>
				<p>{comment.users_full_name}</p>
				<p>{comment.text}</p>
			</div>
		</div>
	);
};

export default Comment;
