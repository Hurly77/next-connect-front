import Posts from '@/feed/posts';
import NewPost from '@/feed/new-post';
import styles from '@/styles/pages/feedPage.module.scss';
import main from '@/utils/DB/db';

const FeedPage = (props) => {
	return (
		<div className={styles.feed}>
			<NewPost user={props.user} />
			<Posts posts={props.posts} />
		</div>
	);
};

export default FeedPage;

export const getStaticProps = async () => {
	await main();
	return {
		props: {
			posts: [
				{
					id: 1,
					user_id: 1,
					users_full_name: 'Cameron Leverett',
					posted_at: 'today',
					text: 'Hello World',
					photos: [],
					comments: [
						{
							user_id: 1,
							post_id: 1,
							users_avatar: 'images/no-avatar.png',
							users_full_name: 'chester tester',
							text: 'Hello',
						},
					],
				},
			],
			user: {
				id: 1,
			},
		},
	};
};
