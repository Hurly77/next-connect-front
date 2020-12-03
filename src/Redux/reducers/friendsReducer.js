const friendsReducer = (
	state = {
    friends: [],
    pendingFriends: []
	},
	action,
) => {
	switch (action.type) {
		case 'FRIENDS':
			return {
				...state,
				friends        : action.payload.friends,
				pendingFriends : action.payload.pendingFriends,
			};
			
		default:
			return state;
	}
};

export default friendsReducer;
