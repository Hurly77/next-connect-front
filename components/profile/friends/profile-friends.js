import { checkFriends } from '@/actions/friendActions';
import Friend from '@/components/friend';

const ProfileFriends = (props) => {
	useEffect(() => {
		const props = props;
		const userId = props.currentUser.id;
		!isEqual(props.friends, prevProps.friends)
			? checkFriends(userId)
			: null;
	}, []);

	mapFriends = (friends) => {
		return friends.map((friend) => {
			return <Friend key={friend.id} props={friend} />;
		});
	};

	return (
		<div className="friends-container">
			{mapFriends(props.friends)}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		friends: state.friends.friends,
		currentUser: state.auth.currentUser,
	};
};

export default ProfileFriends;
