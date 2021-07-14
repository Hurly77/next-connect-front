import Posted from '@/components/profile/posts/posted';
import NewPost from '@/feed/new-post';

const FeedPage = (props) => {
	return (
		<>
			<NewPost />
			<Posted posts={props.posts} />
		</>
	);
};

export default FeedPage;

export const getStaticProps = async () => {
	return {
		props: {
			posts: [
				{
					id: 1,
					user_id: 1,
					post: 'Hello World',
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
		},
	};
};
