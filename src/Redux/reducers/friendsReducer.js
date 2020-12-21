const friendsReducer = (
	state = {
    friends: [],
		pendingFriends: [],
		requests: []
	},
	action,
) => {
	switch (action.type) {
		case 'FRIENDS':
			return {
				...state,
				friends        : action.payload.friends,
				pendingFriends : action.payload.pendingFriends,
				requests: action.payload.requests
			};
			
		default:
			return state;
	}
};

export default friendsReducer;
