import styles from '@/styles/pages/feedPage.module.scss';
import SmallAvatar from '../ui/media/small -avatar';

const Comment = ({ comment }) => {
	return (
		<div className={styles.comment}>
			<SmallAvatar />
			<div>
				<p>{comment.users_full_name}</p>
				<p>{comment.text}</p>
			</div>
		</div>
	);
};

export default Comment;
