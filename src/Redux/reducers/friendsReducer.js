const friendsReducer = (
	state = {
		friends        : [],
		pendingFriends : [],
		requests       : [],
	},
	action,
) => {
	switch (action.type) {
		case 'FRIENDS':
			return {
				...state,
				friends        : action.payload.friends,
				pendingFriends : action.payload.pendingFriends,
				requests       : action.payload.requests,
			};

		case 'DENY':
			return {
				...state,
				friends        : [...state.friends],
				pendingFriends : action.payload.pendingFriends,
				requests       : [...state.requests],
			};

		case 'ACCEPTED':
			return {
				...state,
				friends        : action.payload.friends,
				pendingFriends : [...state.pendingFriends],
				requests       : [...state.requests],
			};

		case 'REQUEST':
			return {
				...state,
				friends        : [...state.friends],
				pendingFriends : action.payload.pendingFriends,
				requests       : [...state.requests],
			};

		default:
			return state;
	}
};

export default friendsReducer;
